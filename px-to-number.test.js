import {PxToNumber} from './px-to-number.js'

test('It trasforms pixel units to number', () => { 
  expect(PxToNumber('10px')).toEqual(10)
})
