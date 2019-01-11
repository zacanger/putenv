const thing = require('./.build/Release/thing.node')

module.exports = ({ key, val }) => !!thing(`${key}=${val}`)
