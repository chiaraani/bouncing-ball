import {PxToNumber} from './px-to-number.js'

const containerTag = document.createElement('div')
containerTag.id = 'container'
	document.body.appendChild(containerTag)

export const container = {
	tag: containerTag,
	get width() {
	  return PxToNumber( getComputedStyle(this.tag).width )
  },
	get height() {
	  return PxToNumber( getComputedStyle(this.tag).height )
  }
}
