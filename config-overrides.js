const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = {
  webpack: function (config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          components: path.resolve(__dirname, `${paths.appSrc}/components`),
          services: path.resolve(__dirname, `${paths.appSrc}/services`),
          icons: path.resolve(__dirname, `${paths.appSrc}/icons`)
        }
      },
      output: {
        ...config.output,
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js'
      },
      optimization: {
        ...config.optimization,
        runtimeChunk: 'single'
      }
    }
  }
}
