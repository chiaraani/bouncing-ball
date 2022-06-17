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

	get boundaries() {
		return { 
			top: this.radius, 
			left: this.radius,
			right: container.width - this.radius,
			bottom: container.height - this.radius
		}
	}

	get outOfBoundary() {
		let outOfBoundaries = []
		
		if (this.x <= this.boundaries.left || this.x >= this.boundaries.right) {
			outOfBoundaries.push('horizontal')
		}

		if (this.y <= this.boundaries.top || this.y >= this.boundaries.bottom) {
			outOfBoundaries.push('vertical')
		}

		return outOfBoundaries
	}

	move({x, y}) { this.x += x; this.y += y }

	#animate() {
		setInterval(() => {
			if (this.outOfBoundary.length > 0) this.#bounce()
			this.move(this.speed)
		}, 40)
	}

  #bounce() {
		if (this.outOfBoundary.includes('horizontal')) {
			this.speed.x = -(this.speed.x)

			if (this.x < this.boundaries.left) this.x = this.boundaries.left
			if (this.x > this.boundaries.right) this.x = this.boundaries.right
		}

		if (this.outOfBoundary.includes('vertical')) {
			this.speed.y = -(this.speed.y)

			if (this.y < this.boundaries.top) this.y = this.boundaries.top
			if (this.x > this.boundaries.bottom) this.y = this.boundaries.bottom
		}
	}
}
