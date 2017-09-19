const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['./src/vendor.js', 'lodash', 'jquery', 'bootstrap',
            'prop-types', 'react', 'react-dom', 'react-router-dom'],
        app: ['./src/index.jsx'],

    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'amd',
        publicPath: '/fantasy-skeleton-arcgis/',
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react',
                    'stage-1',
                ],
                plugins: [
                    'lodash',
                ],
            },
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader',
        }, {
            test: /\.(png|gif)$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['vendor', 'app', 'manifest'],
            template: './src/index.html',
            hash: true,
            filename: 'index.html',
            title: 'Fantasy Skeleton Arcgis',
            cdn: 'https://cdn.bootcss.com/',
            scripts: [{
                file: 'modernizr.min.js',
                path: 'assets/js/',
                locale: true,
            }, {
                // arcgis js api应该最后引用，否则可能导致multiple define错误
                file: 'init.js',
                path: 'https://js.arcgis.com/4.4/',
                version: '4.4',
                locale: true,
            }],
            links: [{
                rel: 'stylesheet',
                file: 'main.css',
                locale: true,
                path: 'https://js.arcgis.com/4.4/esri/css/',
            }],
            dojoDefines: [],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['app', 'vendor'],
        })],
    externals: [
        (context, request, callback) => {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, `amd ${request}`)
            }
            return callback()
        },
    ],
}
