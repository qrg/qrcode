'use strict';

const { resolve } = require('path');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const { DIST_DIR } = require('./paths');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: true,
    publicPath: '/',
    contentBase: resolve(DIST_DIR),
    watchContentBase: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
});
