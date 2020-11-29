import {trueTypeOf} from './trueTypeOf'

/** @returns {Array.<function, function>} [getStore, setStore] */
type GetterAndSetter = readonly [() => unknown, (newStore: unknown) => void]
export const useStore = (initialStore: unknown) => {
  let store = initialStore
  const get = () => store
  const set = (newStore: unknown) => {
    // @ts-ignore: runtime check
    store = trueTypeOf(newStore) === 'function' ? newStore(store) : newStore
  }
  return Object.freeze([get, set]) as GetterAndSetter
}
