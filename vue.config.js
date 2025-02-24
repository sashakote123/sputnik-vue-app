//const { defineConfig } = require('@vue/cli-service')
module.exports = {
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