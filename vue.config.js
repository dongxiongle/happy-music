const path = require('path');
module.exports = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    public: 'http://music.jrsq.com',
    port: '8010',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/common.less')]
    }
  }
}
