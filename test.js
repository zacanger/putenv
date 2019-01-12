const tape = require('tape')
const putenv = require('.')
const crypto = require('crypto')

const envVar = crypto.randomBytes(8).toString('hex')
const getEnv = (key) => process.env[key]

tape.test('putenv', (t) => {
  t.notOk(getEnv(envVar), 'env var is not a thing')

  putenv(envVar, 'asdf')
  t.equals(getEnv(envVar), 'asdf', 'equals asdf')

  putenv(envVar, envVar)
  t.equals(getEnv(envVar), envVar, 'equals itself')

  t.end()
})
