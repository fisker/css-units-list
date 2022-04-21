import assert from 'node:assert/strict'
import test from 'node:test'
import cssUnits from './index.js'
import * as namedExports from './index.js'

test('Main', () => {
  assert.ok(Array.isArray(cssUnits), 'CSS units should be an array.')
  assert.ok(cssUnits.length !== 0, 'CSS units should not be empty.')
  assert.ok(cssUnits.includes('px'), 'Git hooks should has `px`')
})

for (const [name, units] of Object.entries(namedExports)) {
  test(`Named export '${name}'`, () => {
    assert.ok(Array.isArray(units), `'${name}' should be an array.`)
    assert.ok(units.length !== 0, `'${name}' should not be empty.`)
    assert.ok(
      units.every((unit) => cssUnits.includes(unit)),
      `'${name}' should be a subset of all units.`,
    )
  })
}
