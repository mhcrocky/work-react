const path = require('path')
const rewireAliases = require('react-app-rewire-aliases')

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@src'  : path.resolve(__dirname, 'src'),
    '@fire' : path.resolve(__dirname, 'src/firebase'),
    '@page' : path.resolve(__dirname, 'src/page'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    '@util' : path.resolve(__dirname, 'src/util'),
    '@core' : path.resolve(__dirname, 'src/core'),
    '@img'  : path.resolve(__dirname, 'src/asset/img'),
    '@scss' : path.resolve(__dirname, 'src/asset/scss'),
  })(config, env)

  return config
}
