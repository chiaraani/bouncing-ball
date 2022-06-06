import {PXToNumber} from './helpers.mjs'
import {container} from './container.mjs'

export class Ball {
	constructor() {
		this.tag = document.createElement('div')
		this.tag.classList.add('ball')
		container.tag.appendChild(this.tag)

		this.x = container.width / 2
		this.y = container.height / 2
	}

	set x(value) { this.tag.style.left = value + 'px' }
	set y(value) { this.tag.style.top = value + 'px' }

	get x() {	return PXToNumber( this.tag.style.left ) }
	get y() {	return PXToNumber( this.tag.style.top ) }

	move({x, y}) { this.x += x; this.y += y }
}
