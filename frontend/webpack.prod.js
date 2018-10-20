const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = env => {
  const contextPath = (env && env.contextPath) || '';
  console.log('Application context path:', contextPath);
  return {
    cache: false,
    entry: {
      app: ['babel-polyfill',
            'isomorphic-fetch',
            './src/index']
    },
    output: {
      path: path.join(common.output.path, 'assets'),
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
      publicPath: `${contextPath}/assets/`
    },
    resolve: common.resolve,
    plugins: (common.plugins || []).concat([
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash:8].css'
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false,
        CONTEXT_PATH: contextPath
      }),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        inject: false,
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        },
        template: 'src/index-template.html',
        contextPath
      })
    ]),
    optimization: common.optimization,
    module: {
      rules: common.module.rules.concat([
        {
          test: /\.(ts|tsx|js|jsx)$/,
          include: path.join(__dirname, 'src'),
          use: ['awesome-typescript-loader']
        }
      ])
    }
  }
};
