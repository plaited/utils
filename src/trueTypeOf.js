export const trueTypeOf = (obj?: unknown) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
