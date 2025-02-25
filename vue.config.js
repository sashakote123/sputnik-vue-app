//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/sputnik-vue-app/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.sputnik8.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};