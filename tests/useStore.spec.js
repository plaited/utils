import test from 'ava'
import {useStore} from '../src'

test('useStore()', t => {
  const [store, setStore] = useStore({a: 1})
  setStore(prev => ({...prev, b: 2}))
  t.deepEqual(store(), {a: 1, b: 2})
  setStore(prev => {
    // eslint-disable-next-line no-unused-vars
    prev = 2
  })
  t.is(store(), undefined)
  setStore(3)
  t.is(store(), 3)
})
