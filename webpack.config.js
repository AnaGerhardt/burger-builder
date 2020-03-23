var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: { 
    filename: "bundle.js", 
    // publicPath: '/', 
    // path: path.resolve(__dirname, 'dist'),
  },
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
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    port: 9000,
    // historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};