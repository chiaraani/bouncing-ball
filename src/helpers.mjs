export function PXToNumber(pixels) {
	return Number( pixels.slice(0, -2) )
}

export function CSSAlias([targetObject, targetProperty], [sourceObject, sourceProperty], format) {
	let descriptor
	switch (format) {
		case 'px':
			descriptor = { 
				get() { return PXToNumber(sourceObject[sourceProperty]) },
				set(value) { sourceObject[sourceProperty] = value + 'px' }
			}
	}

	Object.defineProperty(targetObject, targetProperty, descriptor)
}
