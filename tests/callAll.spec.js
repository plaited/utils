import test from 'ava'
import sinon from 'sinon'
import {callAll} from '../src'

test('callAll()', t => {
  const expected = 'string'
  const firstSpy = sinon.spy()
  const secondSpy = sinon.spy()
  callAll(firstSpy, secondSpy)(expected)
  t.true(firstSpy.calledWith(expected))
  t.true(secondSpy.calledWith(expected))
})
