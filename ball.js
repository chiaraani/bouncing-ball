import {PxToNumber} from './px-to-number.js'
import {container} from './container.js'

export class Ball {
	constructor() {
		this.tag = document.createElement('div')
		this.tag.classList.add('ball')
		container.tag.appendChild(this.tag)

		this.x = Math.random() * container.width
		this.y = Math.random() * container.height
	}

	set x(value) { this.tag.style.right = value + 'px' }
	set y(value) { this.tag.style.top = value + 'px' }

	get x() {	return PxToNumber( this.tag.style.right ) }
	get y() {	return PxToNumber( this.tag.style.top ) }
}
