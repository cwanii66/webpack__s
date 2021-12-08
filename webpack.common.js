const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {  // under module.rules => loaders basic
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3.inject styles into DOM
                    'css-loader', // 2. turns css into commonjs
                    'sass-loader' // 1. turns sass into css
                ],
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({
        template: './src/template.html'
    })],

};