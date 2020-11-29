/**
 * @description a function for returning an unique enough id when you need it
 */
export const ueid = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
