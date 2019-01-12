const ffi = require('ffi')
const { resolve } = require('path')

const wrapperPath = resolve(__dirname, '/build/Release/putenv-wrapper')

const putenv = ffi.Library(wrapperPath, {
  wrapper: [ 'int', [ 'string' ] ]
})

module.exports = ({ key, val }) => !putenv.wrapper(`${key}=${val}`)
