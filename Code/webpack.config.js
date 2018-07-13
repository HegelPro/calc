const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development'

var clientConfig = (function webpackConfig() {
  var config = Object.assign({});

  config.entry = ['./src/app.js', './src/scss/main.scss'];

  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  };

  config.watch = NODE_ENV == 'development',

  config.watchOptions = {
    aggregateTimeout: 100
  }

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

  config.plugins = [
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(NODE_ENV),
    //   LANG:     JSON.stringify('ru')
    // })
  ]

  config.plugins.push(
    new ExtractTextPlugin("styles.css")
  )

  config.devtool = NODE_ENV == 'development'? "source-map": null;

  return config;
});

module.exports = clientConfig;