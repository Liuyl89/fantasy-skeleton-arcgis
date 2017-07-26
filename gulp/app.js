const path = require('path'),
    del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('../webpack.config'),
    WebpackDevServer = require('webpack-dev-server'),
    staticServer = require('node-static'),
    http = require('http'),
    name = ':fantasy-skeleton-react'

gulp.task('clean' + name, function (cb) {
    del.sync('./dist/**/*', {force: true})
    cb()
})

gulp.task('copy' + name, (cb) => {
    gulp.src('./src/404.html')
        .pipe(gulp.dest('./dist'))
    gulp.src('./src/site.webmanifest')
        .pipe(gulp.dest('./dist/assets'))
    gulp.src('./src/css/main.css')
        .pipe(gulp.dest('./dist/assets'))
    gulp.src('./src/assets/img/favicon.ico')
        .pipe(gulp.dest('./dist/assets'))
    gulp.src('./src/assets/img/icon.png')
        .pipe(gulp.dest('./dist/assets'))
    cb()
})

gulp.task('build-dev' + name, ['clean' + name, 'copy' + name, 'webpack:build-dev' + name], function () {
    gulp.watch(['src/**/*'], ['webpack:build-dev' + name])
})

// Production build
gulp.task('build' + name, ['clean' + name, 'copy' + name, 'webpack:build' + name])

gulp.task('webpack:build' + name, function (callback) {
    // modify some webpack config options
    let myConfig = Object.create(webpackConfig)
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err)
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }))
        callback()
    })
})

// modify some webpack config options
let myDevConfig = Object.create(webpackConfig)
myDevConfig.devtool = 'source-map'

// create a single instance of the compiler to allow caching
let devCompiler = webpack(myDevConfig)

gulp.task('webpack:build-dev' + name, function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build-dev', err)
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }))
        callback()
    })
})

gulp.task('webpack-dev-server' + name, ['copy' + name], function () {
    // modify some webpack config options
    let hostName = 'localhost',
        host = `http://${hostName}:`,
        port = 8070,
        staticPort = 8071,
        myConfig = Object.create(webpackConfig)
    myConfig.devtool = 'source-map'
    myConfig.entry.app.unshift(
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/dev-server')
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.HotModuleReplacementPlugin()
    )
    myConfig.module.rules[0].query.env = {
        'development': {
            'presets': ['react-hmre']
        }
    }
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        inline: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        stats: {
            colors: true,
        },
        proxy: {
            [myConfig.output.publicPath + 'assets/*']: {
                target: host + staticPort,
                pathRewrite: {[`${myConfig.output.publicPath}`]: '/'}
            },
            [myConfig.output.publicPath + '404.html']: {
                target: host + staticPort,
            }
        },
        historyApiFallback: {
            index: myConfig.output.publicPath,
        },
    }).listen(port, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err)
        gutil.log('[webpack-dev-server]',
            host + port + myConfig.output.publicPath + 'index.html')
    })

    let fileServer = new staticServer.Server('./dist')
    http.createServer(function (request, response) {
        request.addListener('end', function () {
            fileServer.serve(request, response)
        }).resume()
    }).listen(staticPort)

})