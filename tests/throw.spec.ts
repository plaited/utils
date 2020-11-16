import test from 'ava'
import {_throw} from '..'

test('_throw()', t => {
  const error = t.throws(() => {
    _throw('message')
  }, {instanceOf: Error})
  t.is(error.message, 'message')
})
