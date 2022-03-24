import {container} from './container.js'

test('Container is in body', () => {
	expect(container).toBe(document.getElementById('container'))
})
