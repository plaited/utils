/* eslint-disable no-global-assign */
/* eslint-disable no-restricted-globals */
import test from 'ava'
import {ueid} from '../src'

test.beforeEach(t => {
  t.context = {Date, Math}
  // @ts-ignore: global re-assign
  Date = {
    now: () => 1546088160029,
  }
  // @ts-ignore: global re-assign
  Math = {
    random: () => 4,
    trunc: Math.trunc,
  }
})
test.afterEach(t => {
  // @ts-ignore: global re-assign
  ({Date, Math} = t.context)
})
test('ueid()', t=> {
  t.is(ueid(),'JQ9GYZA5', 'Given current date and time')
})