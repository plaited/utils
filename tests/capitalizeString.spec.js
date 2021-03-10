import test from 'ava'
import {capitalizeString} from '../src'

test('capitalizeString()', t => {
  t.is(capitalizeString('some string'), 'Some string')
})
