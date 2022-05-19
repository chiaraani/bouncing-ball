import {container} from '../src/container.js'

test('Container is in body', () => {
	expect(container.tag).toBe(document.getElementById('container'))
})

test('Container width', () => {
	console.log(container.width)
	container.tag.style.width = '100px'
	expect(container.width).toEqual(100)
})

test('Container height', () => {
	container.tag.style.height = '100px'
	expect(container.height).toEqual(100)
})
