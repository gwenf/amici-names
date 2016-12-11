import {expect} from 'chai'
import amiciNames from '.'

describe('amici-names', () => {
  it('should have a list of all available names', () => {
    expect(amiciNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(amiciNames.random()).to.satisfy(isIncludedIn(amiciNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
