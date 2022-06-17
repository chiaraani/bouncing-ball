import {ball} from '../index.mjs'
import {CSSAliasTest} from './helpers.mjs'
import {container} from '../src/container.mjs'

describe('Ball', function () {
	it('adds a div with ball class inside container', function() {
		chai.expect(document.querySelectorAll('#container > div.ball')).to.include(ball.HTMLTag)
	})

	CSSAliasTest(ball, 'radius', '--radius', 'px', function (assertAlias) {
		assertAlias.getter({CSS: '10px', returns: 10})
		assertAlias.setter({assigns: 25, CSS: '25px'})
	})

	CSSAliasTest(ball, 'x', 'left', 'px', function (assertAlias) {
		assertAlias.getter({CSS: '10px', returns: 10})
		assertAlias.setter({assigns: 100, CSS: '100px'})
	})

	CSSAliasTest(ball, 'y', 'top', 'px', function (assertAlias) {
		assertAlias.getter({CSS: '10px', returns: 10})
		assertAlias.setter({assigns: 100, CSS: '100px'})
	})

	describe('move', function () {
		it('moves right 10px and moves down 2px', function () {
		  const init = {x: ball.x, y: ball.y}
			ball.move(-10, 2)
			chai.expect(ball.x).to.equal(init.x - 10)
			chai.expect(ball.y).to.equal(init.y + 2)
		})
	})

	it('has speed', async function () {
		const init = {x: ball.x, y: ball.y}
		ball.speed = {x: 10, y: -20}
		await new Promise(resolve => setTimeout( () => resolve(), 100))
		chai.expect(Math.round(ball.x)).to.equal(init.x + 1)
		chai.expect(Math.round(ball.y)).to.equal(init.y - 2)
	})

	describe('boundaries', function () {
		it('left equals radius', function () {
			chai.expect(ball.boundaries.left).to.equal(ball.radius)
		})

		it('top equals radius', function () {
			chai.expect(ball.boundaries.top).to.equal(ball.radius)
		})
		
		it('right equals container width minus radius', function () {
			chai.expect(ball.boundaries.right).to.equal(container.width - ball.radius)
		})

		it('bottom equals container height minus radius', function () {
			chai.expect(ball.boundaries.bottom).to.equal(container.height - ball.radius)
		})
	})

	describe('out of boundary', function () {
		it('is out of horizontal boundary', function () {
			ball.x = ball.boundaries.left
			ball.y = ball.boundaries.top + 10
			chai.expect(ball.outOfBoundary).to.deep.equal(['horizontal'])
		})

		it('is out of vertical boundary', function () {
			ball.y = ball.boundaries.top
			ball.x = ball.boundaries.left + 10
			chai.expect(ball.outOfBoundary).to.deep.equal(['vertical'])
		})

		it('is out of both horizontal and vertical boundaries', function () {
			ball.x = ball.boundaries.right
			ball.y = ball.boundaries.bottom
			chai.expect(ball.outOfBoundary).to.deep.equal(['horizontal', 'vertical'])
		})
	})

	describe('bouncing', function () {
		const bouncingTest = (init, end) => async function() {
			ball.radius = 10
			ball.x = init.x
			ball.y = init.y
			ball.speed = init.speed 
			await new Promise(resolve => setTimeout( () => resolve(), 100) )
			chai.expect(ball.speed).to.deep.equal(end.speed)
			chai.expect(Math.round(ball.x)).to.equal(init.x + end.difference.x)
			chai.expect(Math.round(ball.y)).to.equal(init.y + end.difference.y)
		}

		it('left', bouncingTest(
			{x: 5, y: 20, speed: {x: -10, y: 20}},
			{difference: {x: 6, y: 2}, speed: {x: 10, y: 20}}
		))

		it('top', bouncingTest(
			{x: 20, y: 5, speed: {x: -10, y: -20}},
			{difference: {x: -1, y: 7}, speed: {x: -10, y: 20}}
		))
	})
})
