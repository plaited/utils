import test from 'ava'
import {canUseDOM} from '../src'
import {parseHTML} from 'linkedom'
function JSDOM(html) { return parseHTML(html) }

test.before(t => {
  t.context = {window: global.window, document: global.document} 
})

test.after(t => {
  const {window, document} = t.context
  global.window = window
  global.document = document
})
test('callAll(): node', t => {
  t.true(!canUseDOM())
})

test('callAll():fakedom', t => {
  const {document, window} = new JSDOM('<h1>Hello LinkeDOM 👋</h1>')
  global.document = document
  global.window = window
  t.true(canUseDOM())
})

