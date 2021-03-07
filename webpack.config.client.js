const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {StatsWriterPlugin} = require('webpack-stats-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(path.join(__dirname, 'dist', 'public')),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            })
        ]
    },
    plugins: [
        new CompressionPlugin(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new StatsWriterPlugin({
            stats: {
                all: false,
                assets: true,
                excludeAssets: (assetName) => console.log('assetName:', assetName, !/\.css$/.test(assetName)) || !/\.css$/.test(assetName)
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src', 'assets'),
                    to: path.join(__dirname, 'dist', 'public')
                },
                {
                    from: path.join(__dirname, 'manifest.json'),
                    to: path.join(__dirname, 'dist', 'public'),
                    flatten: true
                },
                {
                    from: path.join(__dirname, 'src/**/*.css'),
                    to: path.join(__dirname, 'dist', 'public'),
                    flatten: true
                }
            ]
        })
    ],

    devtool: 'inline-source-map'
});
