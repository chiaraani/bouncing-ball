import {PXToNumber} from '../src/helpers.mjs'

describe('Pixels in string to number helper', function() {
	it('receives as an argument "100px" string and returns 100 number', function () {
		chai.assert.equal(PXToNumber('100px'), 100)
	})
})
