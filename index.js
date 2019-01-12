const ffi = require('ffi')

const wrapperPath = 'build/Release/putenv-wrapper'

const putenv = ffi.Library(wrapperPath, {
  wrapper: [ 'int', [ 'string' ] ]
})

module.exports = ({ key, val }) => !putenv.wrapper(`${key}=${val}`)
