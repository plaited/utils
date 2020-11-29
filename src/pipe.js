/**
 * @description pipe functions left to right
 */
export const pipe = (fn, ...fns) => (
  (...args) => fns.reduce((f, g) => g(f), fn(...args))
)
