const path = require('path'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./src/scripts/index.js', './src/sass/style.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          },
          'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/style.bundle.min.css')
  ]
};
