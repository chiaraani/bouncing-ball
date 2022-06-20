const containerTag = document.createElement('div')
containerTag.id = 'container'
document.body.appendChild(containerTag)

export const container = {
  tag: containerTag,
  get width () {
    return this.tag.clientWidth
  },
  get height () {
    return this.tag.clientHeight
  }
}
