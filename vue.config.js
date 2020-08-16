module.exports = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    public: 'http://music.jrsq.com',
    port: '8010',
    proxy: {
      '/api': {
        target: 'http://140.143.128.100:3000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
