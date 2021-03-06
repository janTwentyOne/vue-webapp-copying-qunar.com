const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_s', resolve('src/assets/style'))
  },
  productionSourceMap: false,
  devServer: {
  }
}
