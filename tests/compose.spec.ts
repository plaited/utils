import test from 'ava'
import {compose} from '..'

test('compose()', t => {
  const add2 = (num: number) => num + 2
  const add10 = (num: number) => num + 10
  const minus8 = (num: number) => num - 8
  const multiply10 = (num: number) => num * 10
  const multiply = (num1: number, num2: number) => num1 * num2
  const value1 = compose(minus8, add10, multiply10)(4)
  const value2 = compose(add2, multiply)(4, 10)
  t.is(value1, 42, 'Given three functions and one argument')
  t.is(value2, 42, 'Given two functions and two arguments')
  interface Person {
    name: string;
  }
  const person: Person = {
    name: 'Mina',
  }
  const getName = (p: Person) => p.name
  const getLength = (str: string) => str.length
  const isEven = (num: number) => num % 2 === 0
  const myComposedFn = compose(isEven, getLength, getName)
  t.is(true, myComposedFn(person), 'Given three functions with different type arguments and one argument' )
})

