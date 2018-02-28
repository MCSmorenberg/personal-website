const path = require('path'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: ['./src/scripts/index.js', './src/sass/style.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          query: {
            "presets": ["es2015"] //-> see .babelrc
          }
        }
      },
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
    new ExtractTextPlugin('./css/bundle.min.css'),
    new MinifyPlugin({}, {
      exclude: 'node_modules'
    })
  ]
};
