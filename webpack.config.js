const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/index.jsx',
  output: {
    path: './build',
    publicPath: '/',
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
        include: /app\/.*/
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
