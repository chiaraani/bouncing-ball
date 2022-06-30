import {container} from './container.mjs'

const button = document.createElement('button')
button.id = 'switch_ball'
button.textContent = 'Switch ball'

button.addEventListener('click', function () { location.reload() })

container.tag.before(button)
