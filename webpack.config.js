const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['./src/vendor.js', 'lodash', 'jquery', 'bootstrap',
            'prop-types', 'react', 'react-dom', 'react-router-dom'],
        app: ['./src/index.jsx'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/fantasy-skeleton-react/',
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
            inject: true,
            chunks: ['vendor', 'app', 'manifest'],
            template: './src/index.html',
            hash: true,
            filename: 'index.html',
            title: 'Fantasy Skeleton React',
            cdn: 'https://cdn.bootcss.com/',
            scripts: [{
                file: 'modernizr.min.js',
                path: 'assets/js/',
                locale: true,
            }],
            links: [],
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
    externals: [{}],
}
