import {Ball} from '../src/ball.js'
import {ball} from '../index.js'

test('ball exists', () => {
	expect(ball.constructor).toBe(Ball)
})
