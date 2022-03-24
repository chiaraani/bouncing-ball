import {container} from './container.js'

export function containerSize() {
	container.tag.style.width = '100px'
	container.tag.style.height = '100px'
}

test('Container is in body', () => {
	expect(container.tag).toBe(document.getElementById('container'))
})

test('Container width', () => {
	container.tag.style.width = '100px'
	expect(container.width).toEqual(100)
})

test('Container height', () => {
	container.tag.style.height = '100px'
	expect(container.height).toEqual(100)
})
