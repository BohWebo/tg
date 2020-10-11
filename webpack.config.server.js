const path = require('path');
const {merge} = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    target: 'node',
    entry: './src/server/index.js',
    externals: [webpackNodeExternals()],
    output: {
        filename: 'server.js',
        path: path.resolve(path.join(__dirname, 'dist'))
    }
});
