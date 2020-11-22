import test from 'ava'
import {get} from '../src'

test('get()', t => {
  const obj = {a: {b: {c: 'hello', d: [1, 2, 3, 'd']}}}
  const getHello = get('a', 'b', 'c')
  const getD = get('a', 'b', 'd', 3)
  t.is(getHello(obj),'hello')
  t.is(getD(obj),'d')
})
