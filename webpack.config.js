const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack')
module.exports = {
    entry: {
        vendor: ['./src/vendor.js'],
        app: ['./src/index.js'],

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/fantasy-skeleton-react/'
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
                    'stage-1'
                ],
                plugins: [
                    'lodash'
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader',
        }, {
            test: /\.(png|gif)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.jpg$/,
            loader: 'file-loader'
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true,
            filename: 'index.html',
            inject: false,
            title: 'Fantasy Skeleton React',
            cdn: 'https://cdn.bootcss.com/',
            scripts: [{
                file: 'modernizr.min.js',
                path: 'modernizr/',
                version: '2.8.3'
            }, {
                file: 'jquery.min.js',
                path: 'jquery/',
                version: '3.2.1'
            }, {
                file: 'lodash.min.js',
                path: 'lodash.js/',
                version: '4.17.4'
            }, {
                file: 'prop-types.min.js',
                path: 'https://unpkg.com/prop-types/',
                version: '15.5.10',
                locale: true,
            }, {
                file: 'react.js',
                path: 'react/',
                version: '15.6.1'
            }, {
                file: 'react-dom.js',
                path: 'react/',
                version: '15.6.1'
            }, {
                file: 'react-router-dom.js',
                path: 'react-router-dom/',
                version: '4.1.2'
            }, {
                file: 'js/bootstrap.min.js',
                path: 'bootstrap/',
                version: '3.3.7'
            }],
            links: [{
                rel: 'stylesheet',
                file: 'normalize.min.css',
                path: 'normalize/',
                version: '7.0.0'
            }, {
                rel: 'stylesheet',
                file: 'assets/main.css',
                locale: true,
                path: ''
            }, {
                rel: 'stylesheet',
                file: 'css/bootstrap.min.css',
                path: 'bootstrap/',
                version: '3.3.7'
            }]
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            '_': 'lodash'
        }),

    ],
    externals: [{
        'jquery': 'jQuery',
        'lodash': '_',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'prop-types':'PropTypes',
    }]
}