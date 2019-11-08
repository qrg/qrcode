'use strict';

const { resolve } = require('path');

const glob = require('glob');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { gzip } = require('@gfx/zopfli');

const { SRC_DIR } = require('./paths');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new PurgecssPlugin({
      paths: glob.sync(resolve(SRC_DIR, '**', '*'), {
        nodir: true
      })
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: gzip
    })
  ]
});
