export const compose = (...fns) => fns.reduce((f, g) => (
  /** @param {...*} args */
  (...args) => f(g(...args))
))