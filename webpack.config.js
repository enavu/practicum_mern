//webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + './client/index.ejs',
  filename: 'index.ejs',
  inject: 'body'
});

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: ['@babel/preset-react']
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}