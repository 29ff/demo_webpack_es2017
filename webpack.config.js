var webpack = require('webpack');
var path = require('path');
require('babel-polyfill');


var config = {
   entry: ['babel-polyfill', './index.js'],
   output: {
      filename: 'bundle.js'
   },

   module: {
      loaders: [
         {
            test: /\.js?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'stage-0']
            }
         }
      ]
   }
};

module.exports = config;