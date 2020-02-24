var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: { filename: "bundle.js" },
  module: {
    rules: [
        { test: /\.(jsx|js)?$/, loader: ['babel-loader', 'eslint-loader'] },
        {
            test: /\.css$/,
            use: [{
            loader: 'style-loader',
            }, {
            loader: 'css-loader',
            }]
        },
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};