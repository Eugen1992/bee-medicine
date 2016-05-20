var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/');

var config = {
  entry: APP_DIR + '/js/Router.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;