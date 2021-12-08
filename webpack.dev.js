const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3.inject styles into DOM
                    'css-loader', // 2. turns css into commonjs
                    'sass-loader' // 1. turns sass into css
                ],
            },
        ]
    }

});