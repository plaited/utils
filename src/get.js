/**
 * @description safely get deeply nested values from an object
 * @example
 * const obj = { a: { b: { c: 'hello', d: [1, 2, 3, 'd'] } } };
 * get('a', 'b', 'c')(obj) => 'hello';
 */
export const get = (...p) => (
  o =>
    p.reduce(
      (xs, x) => ((xs && xs[x])
        ? xs[x]
        : null), 
      o)
)
