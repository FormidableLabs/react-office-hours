const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/index.jsx',
  output: {
    path: './build',
    publicPath: '/build',
    filename: 'app-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app')
    ]
  },
  devtool: 'sourcemap'
};
