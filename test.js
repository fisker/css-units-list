const assert = require('assert')
const fs = require('fs')
const units = require('.')

assert.strict.ok(Array.isArray(units), 'CSS units should be an array.')
assert.strict.ok(units.length > 0, 'CSS units should not be empty.')
assert.strict.ok(units.includes('px'), `Git hooks should has \`px\``)
