const path = require('path')
const { getThemeVariables } = require('ant-design-vue/dist/theme')
// const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@comp', resolve('src/components'))
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        modifyVars: {
          ...getThemeVariables({
            dark: true
          })
        },

        javascriptEnabled: true
      }
    }
  }
}
