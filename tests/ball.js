import {PxToNumber} from '../src/helpers.js'
import {container} from '../src/container.js'
import {Ball} from '../src/ball.js'

container.tag.style = 'width: 100px; height: 100px;'

let ball = new Ball

test('Ball tag is inside container', () => {
 	expect(ball.tag).toBe(document.querySelector('#container > .ball'))
})

test('Ball appears at position', () => {
	expect(ball.x).toEqual(PxToNumber( ball.tag.style.right ))
	expect(ball.y).toEqual(PxToNumber( ball.tag.style.top ))

  ball.x = 50
	ball.y = 50
	expect(ball.tag.style.right).toEqual('50px')
	expect(ball.tag.style.top).toEqual('50px')
})

/*
test('Ball moves', async () => {
	ball.xSpeed = 1;
	ball.ySpeed = 2;

	await setTimeout(() => {
		expect(ball.x).toEqual(51)
		expect(ball.y).toEqual(52)
	}, 40)

	await setTimeout(() => {
		expect(ball.x).toEqual(52)
		expect(ball.y).toEqual(54)
	}, 40)
})
*/
