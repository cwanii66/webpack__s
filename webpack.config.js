const path = require('path');

module.exports = {
    mode: 'development',
    // devTool: 'none',  // no eval
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
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
    }

};