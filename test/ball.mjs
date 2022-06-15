import {ball} from '../index.mjs'

describe('Ball', function () {
	it('adds a div with ball class inside container', function() {
		chai.expect(document.querySelectorAll('#container > div.ball')).to.include(ball.tag)
	})

	it('aliases x to tag.style.left with px format', function () {
		chai.expect(ball.x + 'px').to.equal(ball.tag.style.left)
		ball.x = 100
		chai.expect('100px').to.equal(ball.tag.style.left)
	})

	it('aliases y to tag.style.top with px format', function () {
		chai.expect(ball.y + 'px').to.equal(ball.tag.style.top)
		ball.y = 100
		chai.expect('100px').to.equal(ball.tag.style.top)
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

	it('has speed', async function () {
		let init = {x: ball.x, y: ball.y}
		ball.speed = {x: 1, y: -2}
		await new Promise(resolve => setTimeout( () => resolve(), 40) )
		chai.expect(ball.x).to.equal(init.x + 1)
		chai.expect(ball.y).to.equal(init.y - 2)
	})
})
