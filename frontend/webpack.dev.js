const webpack = require('webpack');
const path = require('path');
const detect = require('detect-port');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const common = require('./webpack.common');

const defaultServerPort = 8000;

const buildDir = path.join(__dirname, 'dev-build');

const contextPath = '';

const configPromise =
  detect(defaultServerPort)
    .then(freePort => (
      {
        cache: true,
        devtool: 'cheap-source-map',
        entry: {
          app: [`webpack-dev-server/client?http://localhost:${freePort}`,
                'webpack/hot/only-dev-server',
                'babel-polyfill',
                'isomorphic-fetch',
                './src/index']
        },
        devServer: {
          compress: true,
          contentBase: [buildDir, './src/'],
          hot: true,
          historyApiFallback: true,
          open: true,
          port: freePort
        },
        output: {
          path: path.join(buildDir, 'assets'),
          filename: '[name].js',
          publicPath: '/assets/'
        },
        resolve: common.resolve,
        plugins: (common.plugins || []).concat([
          new MiniCssExtractPlugin({
            filename: 'styles.css'
          }),
          new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: true,
            CONTEXT_PATH: contextPath
          }),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.LoaderOptionsPlugin({
            debug: true
          }),
          new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: '../index.html',
            inject: false,
            template: 'src/index-template.html'
          }),
          new HtmlWebpackHarddiskPlugin()
        ]),
        optimization: common.optimization,
        module: {
          rules: common.module.rules.concat([
            {
              test: /\.(ts|tsx|js|jsx)$/,
              include: path.join(__dirname, 'src'),
              use: [
                'awesome-typescript-loader',
                {
                  loader: 'babel-loader',
                  options: {
                    plugins: [
                      '@babel/plugin-syntax-typescript',
                      '@babel/plugin-syntax-decorators',
                      '@babel/plugin-syntax-jsx',
                      '@babel/plugin-syntax-dynamic-import',
                      'react-hot-loader/babel'
                    ]
                  }
                }
              ]
            }
          ])
        }
      }
    ));

module.exports = configPromise;
