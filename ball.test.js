import {Ball} from './ball.js'

let ball = new Ball

test('Ball tag is inside container', () => {
 	expect(ball.tag).toBe(document.querySelector('#container > .ball'))
})
