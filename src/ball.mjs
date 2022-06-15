import {CSSAlias} from './helpers.mjs'
import {container} from './container.mjs'

export class Ball {
	constructor() {
    this.#createHTMLTag()

		CSSAlias(this, 'radius', '--radius', 'px')
		CSSAlias(this, 'x', 'left', 'px')
		CSSAlias(this, 'y', 'top', 'px')

		this.#initializeVariables()
		this.#animate()
	}

  #createHTMLTag() {
		this.HTMLTag = document.createElement('div')
		this.HTMLTag.classList.add('ball')
		container.tag.appendChild(this.HTMLTag)
	}

	#initializeVariables() {
		let maxRadius = Math.min(container.width, container.height) / 11
		this.radius = maxRadius * Math.random() + 10

		this.x = container.width * 0.8 * Math.random()
		this.y = container.height * 0.8 * Math.random()

		let randomSpeed = () => Math.random() * 60 - 30
	  this.speed = {x: randomSpeed(), y: randomSpeed()}
	}

	#animate() {
		setInterval(() => this.move(this.speed), 40)
	}

	move({x, y}) { this.x += x; this.y += y }
}
