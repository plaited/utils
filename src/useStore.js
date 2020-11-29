import {trueTypeOf} from './trueTypeOf'
export const useStore = initialStore => {
  let store = initialStore
  const get = () => store
  const set = newStore => {
    store = trueTypeOf(newStore) === 'function' ? newStore(store) : newStore
  }
  return Object.freeze([get, set])
}
