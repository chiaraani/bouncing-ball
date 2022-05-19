import {PxToNumber} from '../src/helpers.js'

test('It trasforms pixel units to number', () => { 
  expect(PxToNumber('10px')).toEqual(10)
})
