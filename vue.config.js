const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    port: 8080,
    proxy: {
      '/adminapi': {
        target: 'http://localhost:8091',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/adminapi': ''
        }
      }
    },
    disableHostCheck: true, // 这是由于新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname 不是配置内的，将中断访问。
}
}