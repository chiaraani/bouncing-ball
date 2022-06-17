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
		  let init = {x: ball.x, y: ball.y}
			ball.move({x: -10, y: 2})
			chai.expect(ball.x).to.equal(init.x - 10)
			chai.expect(ball.y).to.equal(init.y + 2)
		})
	})

	it('has speed', async function () {
		let init = {x: ball.x, y: ball.y}
		ball.speed = {x: 1, y: -2}
		await new Promise(resolve => setTimeout( () => resolve(), 52) )
		chai.expect(ball.x).to.equal(init.x + 2)
		chai.expect(ball.y).to.equal(init.y - 4)
	})

	describe('bounderies', function () {
		it('left equals radius', function () {
			chai.expect(ball.bounderies.left).to.equal(ball.radius)
		})

		it('top equals radius', function () {
			chai.expect(ball.bounderies.top).to.equal(ball.radius)
		})
		
		it('right equals container width minus radius', function () {
			chai.expect(ball.bounderies.right).to.equal(container.width - ball.radius)
		})

		it('bottom equals container height minus radius', function () {
			chai.expect(ball.bounderies.bottom).to.equal(container.height - ball.radius)
		})
	})
})
