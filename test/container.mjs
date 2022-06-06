import {container} from '../src/container.mjs'

describe('container', function() {
	it('is in body', function() {
		chai.assert.equal(document.querySelector('body > #container'), container.tag)
	})

	it('has inner width in number type', function() {
		chai.assert.equal(container.tag.clientWidth, container.width)
		chai.assert.typeOf(container.width, 'Number')
	})

	it('has inner height in number type', function() {
		chai.assert.equal(container.tag.clientHeight, container.height)
		chai.assert.typeOf(container.height, 'Number')
	})
})
