var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin =require('extract-text-webpack-plugin');
var path =require('path');


console.log(__dirname);
module.exports = {
    entry: {
        page1:["babel-polyfill", "./app/index"],
        page2:["babel-polyfill", "./app/index2"],
    },
    output: {
        path: path.resolve(__dirname,"app/dist"),
        publicPath: "",
        filename: 'js/[name]/[chunkhash:8].bundle.js',
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
            // use:ExtractTextWebpackPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            // }),
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            }),
            // use:["style-loader", "css-loader"]
        },
        {
            test: /\.(html)$/,
                use: {
                loader: 'html-withimg-loader',
            }
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
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
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.resolve(__dirname, './app/index.html'),
            filename:'index.html',
            chunks:['page1']
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.resolve(__dirname, './app/index2.html'),
            filename:'index2.html',
            chunks:['page2']
        })
    ]
}

