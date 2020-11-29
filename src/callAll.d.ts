export function callAll(...fns:Array<(...args: unknown[]) => unknown>): (...args: unknown[]) => void;
