import {PxToNumber} from './px-to-number.js'
import {containerSize} from './container.test.js'
import {Ball} from './ball.js'

let ball = new Ball

test('Ball tag is inside container', () => {
 	expect(ball.tag).toBe(document.querySelector('#container > .ball'))
})

test('Ball appears at random postion', () => {
	expect(ball.x).toEqual(PxToNumber( ball.tag.style.right ))
	expect(ball.y).toEqual(PxToNumber( ball.tag.style.top ))

  ball.x = 50
	ball.y = 50
	expect(PxToNumber( ball.tag.style.right )).toEqual(50)
	expect(PxToNumber( ball.tag.style.top )).toEqual(50)
})
