import test from 'ava'
import {escape, unescape} from '..'

test('escape()', t => {
  t.is(escape('&<>\'"'), '&amp;&lt;&gt;&#39;&quot;')
  t.is(
    escape('<>\'"&'),
    '&lt;&gt;&#39;&quot;&amp;',
  )
  t.is(
    unescape('&amp;&lt;&gt;&#39;&quot;'),
    '&<>\'"',
  )
  t.is(
    unescape('&lt;&gt;&#39;&quot;&amp;'),
    '<>\'"&',
  )
})
