const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const deploy = require('./webpack.deploy');

module.exports = merge(deploy, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
