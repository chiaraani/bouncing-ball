import {ball} from '../index.mjs'

describe('index file', function () {
	it('creates a ball', function () {
		chai.expect(ball.constructor.name).to.equal('Ball')
	})
})
