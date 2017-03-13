var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

require('file-loader');
require('style-loader');
require('css-loader');
require('url-loader');

// require("css!./styles/main.css");


module.exports = {
  devtool: 'source-map',
  entry: {
        app: './app/index.js',
        vendor: ['angular']
    },
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: ''
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 options: {
                     presets: ['es2015']
                 }
             },
             {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?name=/img/[name].[ext]"
            }
         ]
     },
     plugins: [
          new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              filename: 'vendor.bundle.js'
          }),
          new ExtractTextPlugin('./styles/main.css')
     ],
     resolveLoader: {
       modules: ['node_modules']
     },

     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
