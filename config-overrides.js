const path = require('path')
const rewireAliases = require('react-app-rewire-aliases')

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, 'src'),
    '@fire': path.resolve(__dirname, 'src/firebase'),
    '@img': path.resolve(__dirname, 'src/img'),
    '@page': path.resolve(__dirname, 'src/page'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@layout': path.resolve(__dirname, 'src/layout')
  })(config, env)

  return config
}
