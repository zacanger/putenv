const ffi = require('ffi')

// eslint-disable-next-line
const wrapperPath = __dirname + '/build/Release/putenv-wrapper'

const putenv = ffi.Library(wrapperPath, {
  wrapper: [ 'int', [ 'string' ] ]
})

module.exports = ({ key, val }) => !putenv.wrapper(`${key}=${val}`)
