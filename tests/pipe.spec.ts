import test from 'ava'
import {pipe} from '../src'

test('pipe()', t => {
  const add2 = (num: number) => num + 2
  const add10 = (num: number) => num + 10
  const minus8 = (num: number) => num - 8
  const multiply10 = (num: number) => num * 10
  const multiply = (num1: number, num2: number) => num1 * num2
  const value1 = pipe(minus8, add10, multiply10)(4)
  const value2 = pipe(multiply, add2)(4, 10)
  t.is(value1, 60, 'Given three functions and one argument')
  t.is(value2, 42, 'Given two functions and two arguments')
})
