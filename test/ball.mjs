import {ball} from '../index.mjs'

describe('Ball', function () {
	it('adds a div with ball class inside container', function() {
		chai.expect(document.querySelectorAll('#container > div.ball')).to.include(ball.HTMLTag)
	})

	it('aliases radius to style --radius with px format', function () {
		ball.radius = 25
		chai.expect('50px').to.equal(getComputedStyle(ball.HTMLTag).height)
	})

	it('aliases x to style left with px format', function () {
		chai.expect(ball.x + 'px').to.equal(ball.HTMLTag.style.left)
		ball.x = 100
		chai.expect('100px').to.equal(ball.HTMLTag.style.left)
	})

	it('aliases y to style top with px format', function () {
		chai.expect(ball.y + 'px').to.equal(ball.HTMLTag.style.top)
		ball.y = 100
		chai.expect('100px').to.equal(ball.HTMLTag.style.top)
	})

	describe('move', function () {
		it('moves right 10px and moves down 2px', function () {
		  let init = {x: ball.x, y: ball.y}
			ball.move({x: -10, y: 2})
			chai.expect(ball.x).to.equal(init.x - 10)
			chai.expect(ball.y).to.equal(init.y + 2)
		})
	})

	it('has speed', async function () {
		let init = {x: ball.x, y: ball.y}
		ball.speed = {x: 1, y: -2}
		await new Promise(resolve => setTimeout( () => resolve(), 60) )
		chai.expect(ball.x).to.equal(init.x + 2)
		chai.expect(ball.y).to.equal(init.y - 4)
	})
})
