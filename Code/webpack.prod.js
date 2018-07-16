const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


var clientConfig = (function webpackConfig() {
  var config = Object.assign({});

  config.mode = 'production';

  config.entry = ['./src/app.js', './src/scss/main.scss'];

  config.output = {
    path: path.resolve(__dirname, 'dist/prod'),
    filename: 'bundle.[chunkhash].js'
  };

  config.module = {
    rules: [
      {
        test: /\.js$/,
        use: 
          {
              loader: 'babel-loader'
          },
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract(
      //     {
      //       fallback: 'style-loader',
      //       use: ['css-loader', 'sass-loader']
      //     })
      // }
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
        		options: { 
              minimize: true,
              url: false,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                sourceMap: false
            }
          },
          'sass-loader',
        ],
      }
    ]
  }

  config.devtool = false;

  config.resolve = {};

  config.plugins = []

  config.plugins.push(
    new CleanWebpackPlugin('dist/prod', {} )
  )

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  )
  
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      h1: 'Production Mode',
	    template: 'src/templates/index.html'
    })
  )

  config.plugins.push( new WebpackMd5Hash() )

  return config;
});

module.exports = clientConfig;