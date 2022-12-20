const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common(), {
  mode: 'production',
  devtool: false,
  stats: 'errors-warnings',
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
});
