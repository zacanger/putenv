const thing = require('./build/Release/putenv-wrapper.node')

module.exports = ({ key, val }) => !!thing(`${key}=${val}`)
