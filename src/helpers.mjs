export function PXToNumber(pixels) {
	return Number( pixels.slice(0, -2) )
}

export function CSSAlias(object, alias, property, format) {
	let styleGetter = () => {
		return getComputedStyle(object.HTMLTag).getPropertyValue(property)
	}

	let styleSetter = (value) => {
		object.HTMLTag.style.setProperty(property, value)
	}

	let descriptor
	switch (format) {
		case 'px':
			descriptor = { 
				get() { return PXToNumber(styleGetter()) },
				set(value) { styleSetter(value + 'px') }
			}
	}

	Object.defineProperty(object, alias, descriptor)
}
