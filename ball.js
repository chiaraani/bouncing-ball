import {container} from './container.js'

export class Ball {
	constructor() {
		this.tag = document.createElement('div')
		this.tag.classList.add('ball')
		container.appendChild(this.tag)
	}
}
