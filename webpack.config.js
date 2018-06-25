var HtmlWebpackPlugin = require('html-webpack-plugin');
var path =require('path');


console.log(__dirname);
module.exports = {
    entry: ["babel-polyfill", "./app/index"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"]},
        { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"] }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        })
    ]
}