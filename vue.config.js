/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: young
 * @Date: 2020-08-23 21:54:21
 * @LastEditTime: 2020-08-23 21:57:19
 * @LastEditors: Please set LastEditors
 * @Description: config
 * @FilePath: \happy-music\vue.config.js
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');
module.exports = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    public: 'http://music.jrsq.com',
    port: '8010',
    proxy: {
      '/api': {
        target: 'http://music.jrsq.fun',
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
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => merge(options, {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [tsImportPluginFactory({
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
          })]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      }))
  }
}
