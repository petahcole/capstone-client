var path = require('path');
var webpack = require('webpack');
// var pluginExtractText = require("extract-text-webpack-plugin");


require('file-loader');
require('style-loader');
require('css-loader');
require("css!./styles/main.css");


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
     plugins: [
          new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              filename: 'vendor.bundle.js'
          })
          // new pluginExtractText('./styles/main.css')
     ],
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
                test: /\.css$/, loader: "style-loader!css-loader"
              }
         ]
     },
     resolveLoader: {
       modules: ['node_modules']
     },

     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
