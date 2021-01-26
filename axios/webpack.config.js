const path = require("path")

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'axios-mini.js',
        sourceMapFilename:'axios.map' ,
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/i,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        port: 8000,
        open: true,
    },
}