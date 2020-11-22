import test from 'ava'
import {wait} from '../src'

test('wait()', async t => {
  await wait(20)
  t.pass()
})