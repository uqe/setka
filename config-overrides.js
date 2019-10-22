const path = require('path')
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

module.exports = function override(config, env) {
  // config.resolve = {
  //   ...config.resolve,
  //   alias: { src: path.resolve(__dirname, 'src') },
  // }

  // config.plugins = config.plugins.filter(plugin => {
  //   return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
  // })

  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    })
  }

  return config
}
