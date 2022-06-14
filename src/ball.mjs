import {CSSAlias} from './helpers.mjs'
import {container} from './container.mjs'

export class Ball {
	constructor() {
		this.tag = document.createElement('div')
		this.tag.classList.add('ball')
		container.tag.appendChild(this.tag)

		CSSAlias([this, 'x'], [this.tag.style, 'left'], 'px')
		CSSAlias([this, 'y'], [this.tag.style, 'top'], 'px')

		this.x = container.width / 2
		this.y = container.height / 2
	}


	move({x, y}) { this.x += x; this.y += y }
}
