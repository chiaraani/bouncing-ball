import {INTERVAL, FPS} from './config.mjs'
import {CSSAlias, randomRange} from './helpers.mjs'
import {container} from './container.mjs'

export class Ball {
	static MAX_SPEED = 1000
	static MIN_SPEED = 50
	static MAX_RADIUS = Math.min(container.width, container.height) / 10
	static MIN_RADIUS = 10

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
		this.radius = randomRange(Ball.MIN_RADIUS, Ball.MAX_RADIUS)

		this.x = randomRange(this.boundaries.left, this.boundaries.right)
		this.y = randomRange(this.boundaries.top, this.boundaries.bottom)

		let randomSpeed = () => {
			let speed = randomRange(Ball.MIN_SPEED, Ball.MAX_SPEED)
			let direction = Math.random() > 0.5 ? 1 : -1

			return speed * direction
		}

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

	move(x, y) { this.x += x; this.y += y }

	#animate() {
		setInterval(() => {
			if (this.outOfBoundary.length > 0) this.#bounce()

			this.move(this.speed.x / FPS, this.speed.y / FPS)
		}, INTERVAL)
	}

  #bounce() {
		if (this.outOfBoundary.includes('horizontal')) {
			this.speed.x = -(this.speed.x)

			if (this.x < this.boundaries.left) this.x = this.boundaries.left
			else if (this.x > this.boundaries.right) this.x = this.boundaries.right
		}

		if (this.outOfBoundary.includes('vertical')) {
			this.speed.y = -(this.speed.y)

			if (this.y < this.boundaries.top) this.y = this.boundaries.top
			else if (this.y > this.boundaries.bottom) this.y = this.boundaries.bottom
		}
	}
}
