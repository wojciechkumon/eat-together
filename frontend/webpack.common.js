const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  output: {
    path: distPath
  },
  resolve: {extensions: ['.ts', '.tsx', '.js', '.json']},
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: module => /node_modules/.test(module.resource)
                          && !module.resource.endsWith('.css'),
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 12288,
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {name: '[name].[hash:8].[ext]'}
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {name: 'pdf/[hash:8]/[name].[ext]'}
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /favicon\.ico$/,
        use: {
          loader: 'file-loader',
          options: {name: '../favicon.ico'}
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
