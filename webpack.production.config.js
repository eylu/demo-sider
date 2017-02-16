var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app:  __dirname + '/src/main.js'
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        // publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],        // babel 配置项中
            }
        },{
            test: /\.css$/,
            // loader: 'style!css'
            loader: ExtractTextPlugin.extract('style', 'css')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , "src", "index.tmpl.html")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
