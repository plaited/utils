/**
 * @description pipe functions left to right
 */
export const pipe = <T extends unknown[], R>(fn: (...args: T) => R, ...fns: Array<(a: R) => R>) => (
  /** @param {...*} args */
  (...args: T) => fns.reduce((f, g) => g(f), fn(...args))
)
