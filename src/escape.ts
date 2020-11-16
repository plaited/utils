const reEscape = /[&<>'"]/g
const reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
const escapeObj: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}
const unescapeObj: Record<string, string> = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
}
const {replace} = ''
/**
 * @desription escapes a string
 * @example
 * escape('&<>\'"') => '&amp;&lt;&gt;&#39;&quot;'
 */
export const escape = (sub: string): string => replace.call(sub, reEscape, key => escapeObj[key])
/**
 * @desription unescapes and escaped a string
 * @example
 * unescape('&amp;&lt;&gt;&#39;&quot;') => '&<>\'"'
 */
export const unescape = (sub: string): string => replace.call(sub, reUnescape, key => unescapeObj[key])
