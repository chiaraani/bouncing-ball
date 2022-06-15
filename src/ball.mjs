import {CSSAlias} from './helpers.mjs'
import {container} from './container.mjs'

export class Ball {
	constructor() {
    this.#createHTMLTag()

		CSSAlias([this, 'x'], [this.tag.style, 'left'], 'px')
		CSSAlias([this, 'y'], [this.tag.style, 'top'], 'px')

		this.#initializeVariables()
		this.#animate()
	}

  #createHTMLTag() {
		this.tag = document.createElement('div')
		this.tag.classList.add('ball')
		container.tag.appendChild(this.tag)
	}

	#initializeVariables() {
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
