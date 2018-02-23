// Requires
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  title: 'REACT TEST',
  inject: 'body',
});

// Exports Module for js, css and img format
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader', exclude: /node_modules/ },
    ],
  },
  // Port
  devServer: {
    port: 9090,
  },
  // Webpack Plugin
  plugins: [HtmlWebpackPluginConfig],
};

