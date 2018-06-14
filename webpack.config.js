var path =require('path');

module.exports = {
    entry: "./app/index",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    }
}