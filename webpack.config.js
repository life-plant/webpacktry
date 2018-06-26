var HtmlWebpackPlugin = require('html-webpack-plugin');
var path =require('path');


console.log(__dirname);
module.exports = {
    entry: ["babel-polyfill", "./app/index"],
    output: {
        path: path.resolve(__dirname,"app/dist"),
        publicPath: "",
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        { 
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
        },
        { 
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"] 
        },
        {
            test: /\.(html)$/,
                use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            options: {
                limit: 8192,
                mimetype: 'image/png',
                name: 'src/assets/[name].[ext]'
            }
　　　　}
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.html'),
            filename:'index.html',
        })
    ]
}

