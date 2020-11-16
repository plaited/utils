/**
 * @description safely get deeply nested values from an object
 * @example
 * const obj = { a: { b: { c: 'hello', d: [1, 2, 3, 'd'] } } };
 * get('a', 'b', 'c')(obj) => 'hello';
 */
export const get = <TS extends Array<string | number>>(...p: TS) => (
  /** @param {{}} o */
  (o: Record<string| number, unknown>) =>
    p.reduce<unknown>(
      (xs, x) => ((xs && (xs as Record<string| number, unknown>)[x])
        ? (xs as Record<string| number, unknown>)[x]
        : null), 
      o)
)
