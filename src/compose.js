// eslint-disable-next-line @typescript-eslint/ban-types
// @ts-ignore: compose typing sucks in typescript
export const compose = (...fns: Array<(...a: any[])=> unknown>) => fns.reduce((f, g) => (
  /** @param {...*} args */
  (...args) => f(g(...args))
))