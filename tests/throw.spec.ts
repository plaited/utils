import test from 'ava'
import {_throw} from '../src'

test('_throw()', t => {
  const error = t.throws(() => {
    _throw('message')
  }, {instanceOf: Error})
  t.is(error.message, 'message')
})
