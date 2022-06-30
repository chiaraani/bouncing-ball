import '../src/refresh.mjs'

describe('Refresh button', function () {
  const button = document.querySelector('body > #container + button#switch_ball')

  it('creates a button in body before container', function () {
    chai.expect(button).to.not.null
  })

  it('bears text "Switch ball"', function () {
    chai.expect(button.textContent).to.equal('Switch ball')
  })
})
