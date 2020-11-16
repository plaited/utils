import test from 'ava'
import {capitalizeString} from '..'

test('capitalizeString()', t => {
  t.is(capitalizeString('some string'), 'Some string')
})