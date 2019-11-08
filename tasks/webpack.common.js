'use strict';

const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const { SRC_DIR, DIST_DIR } = require('./paths.js');

module.exports = {
  entry: {
    main: resolve(SRC_DIR, 'scripts/index.tsx')
  },
  output: {
    path: DIST_DIR,
    filename: 'scripts/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    /*
    new CopyWebpackPlugin([
      {
        from: resolve(SRC_DIR, 'favicons'),
        to: resolve(DIST_DIR, 'favicons')
      },
      {
        from: resolve(SRC_DIR, 'robots.txt'),
        to: DIST_DIR
      },
      {
        from: resolve(SRC_DIR, 'site.webmanifest'),
        to: DIST_DIR
      }
    ])
    */
    new HtmlWebpackPlugin({
      filename: resolve(DIST_DIR, 'index.html'),
      template: resolve(SRC_DIR, 'index.html'),
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
              url: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [
                ':src',
                ':data-src',
                'source:srcset',
                'source:data-srcset'
              ], // load(require) images, videos or other resources
              interpolate: true
            }
          }
        ]
      }
    ]
  }
};
