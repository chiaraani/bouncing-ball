/* global getComputedStyle */

import { PXToNumber, CSSAlias } from '../src/helpers.mjs'

describe('Helpers', function () {
  describe('Pixels in string to number helper', function () {
    it('receives as an argument "100px" string and returns 100 number',
      function () {
        chai.assert.equal(PXToNumber('100px'), 100)
      })
  })

  describe('CSS alias', function () {
    const tag = document.createElement('div')
    document.body.appendChild(tag)
    tag.style.setProperty('--a', '10px')
    const object = { HTMLTag: tag }

    CSSAlias(object, 'b', '--a', 'px')

    describe('Pixels format', function () {
      it('builds an alias getter which transforms pixels to number',
        function () {
          chai.expect(object.b).to.equal(10)
        })

      it('builds an alias setter which transforms number to pixels',
        function () {
          object.b = 5
          chai.expect(
            getComputedStyle(object.HTMLTag)
              .getPropertyValue('--a')
          ).to.equal('5px')
        })
    })
  })
})

export function CSSAliasTest (object, alias, property, format, test) {
  it(`aliases ${alias} to style property ${property} with ${format} format`, function () {
    test({
      getter ({ CSS, returns }) {
        object.HTMLTag.style.setProperty(property, CSS)
        chai.expect(object[alias]).to.equal(returns)
      },
      setter ({ assigns, CSS }) {
        object[alias] = assigns
        chai.expect(
          getComputedStyle(object.HTMLTag)
            .getPropertyValue(property)
        ).to.equal(CSS)
      }
    })
  })
}
