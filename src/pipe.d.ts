export function pipe<T extends unknown[], R>(fn: (...args: T) => R, ...fns: ((a: R) => R)[]): (...args: T) => R;
