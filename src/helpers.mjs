/* global getComputedStyle */

export function PXToNumber (pixels) {
  return Number(pixels.slice(0, -2))
}

export function CSSAlias (object, alias, property, format) {
  const styleGetter = () => {
    return getComputedStyle(object.HTMLTag).getPropertyValue(property)
  }

  const styleSetter = (value) => {
    object.HTMLTag.style.setProperty(property, value)
  }

  const descriptors = {
    px: {
      get () { return PXToNumber(styleGetter()) },
      set (value) { styleSetter(value + 'px') }
    }
  }

  Object.defineProperty(object, alias, descriptors[format])
}

export function randomRange (min, max) {
  return (max - min) * Math.random() + min
}
