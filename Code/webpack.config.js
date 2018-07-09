const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var clientConfig = (function webpackConfig() {
  var config = Object.assign({});

  config.entry = ['./src/app.js', './src/scss/main.scss'];

  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  };

  config.module = {
      rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
    ]
  }

  config.resolve = {};

  config.plugins = []

  config.plugins.push(
    new ExtractTextPlugin("styles.css")
  )

  config.devtool = "source-map"

  return config;
});

module.exports = clientConfig;


/* module.exports = {
  entry: ['./src/app.js', './src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}; */