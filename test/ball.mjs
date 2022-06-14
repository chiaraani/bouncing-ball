import {ball} from '../index.mjs'

describe('Ball', function () {
	it('adds a div with ball class inside container', function() {
		chai.expect(document.querySelectorAll('#container > div.ball')).to.include(ball.tag)
	})

	describe('get x', function () {
		it('returns left style property in number type', function () {
			chai.expect(ball.x + 'px').to.equal(ball.tag.style.left)
			chai.expect(ball.x).to.be.a('number')
		})
	})

	describe('set x', function () {
		it('sets left style property', function () {
			ball.x = 100
			chai.expect('100px').to.equal(ball.tag.style.left)
		})
	})

	describe('get y', function () {
		it('returns top style property in number type', function () {
			chai.expect(ball.y + 'px').to.equal(ball.tag.style.top)
			chai.expect(ball.y).to.a('number')
		})
	})

	describe('set y', function () {
		it('sets top style property', function () {
			ball.y = 100
			chai.expect('100px').to.equal(ball.tag.style.top)
		})
	})

	describe('move', function () {
		it('moves right 10px and moves down 2px', function () {
			ball.x = 100
			ball.y = 100
			ball.move({x: -10, y: 2})
			chai.expect(ball.x).to.equal(100 - 10)
			chai.expect(ball.y).to.equal(100 + 2)
		})
	})
})
