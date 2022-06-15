import {PXToNumber, CSSAlias} from '../src/helpers.mjs'

describe('Helpers', function () {
	describe('Pixels in string to number helper', function() {
		it('receives as an argument "100px" string and returns 100 number', function () {
			chai.assert.equal(PXToNumber('100px'), 100)
		})
	})

	describe('CSS alias', function () {
		let tag = document.createElement("div")
		document.body.appendChild(tag)
		tag.style.setProperty('--a', '10px') 
		let object = {HTMLTag: tag}

		CSSAlias(object, 'b', '--a', 'px')

		describe('Pixels format', function () {
			it('builds an alias getter which transforms pixels to number', function () {
				chai.expect(object.b).to.equal(10)
			})

			it('builds an alias setter which transforms number to pixels', function () {
				object.b = 5
				chai.expect(getComputedStyle(object.HTMLTag).getPropertyValue('--a')).to.equal('5px')
			})
		})
	})		
})
