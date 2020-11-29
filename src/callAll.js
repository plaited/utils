/**
 * @description calls each function passed to it with the provided arguments
 * @param {...Function} fns - n functions
 * @example
 * e => callAll(onClick, prevent)(e);
 */
export const callAll = (...fns: Array<(...args: unknown[]) => unknown>) => 
  (...args: unknown[] ) => fns.forEach(fn => fn && fn(...args))
