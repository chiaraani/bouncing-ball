import '../src/refresh.mjs'

describe('Refresh button', function () {
  const button = document.querySelector('body > button#switch_ball')

  it('creates a button in body before container', function () {
    chai.expect(
      document.querySelector('body > button#switch_ball + #container')
      ).to.not.null
  })

  it('bears text "Switch ball"', function () {
    chai.expect(button.textContent).to.equal('Switch ball')
  })
})
