var path =require('path');

console.log(__dirname);
module.exports = {
    entry: "./app/index",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
}