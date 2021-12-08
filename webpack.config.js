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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }

};