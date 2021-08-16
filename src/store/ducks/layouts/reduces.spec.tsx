import reducer, { showMessage, hideMessage } from ".";

describe('Layout reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: ''})).toEqual({ showMessage: false})
  })

  it('should return the showMessage as true', () => {
    expect(reducer({ showMessage: false }, { type: showMessage.type})).toEqual({ showMessage: true})
  })

  it('should return the showMessage as false', () => {
    expect(reducer({ showMessage: true }, { type: hideMessage.type})).toEqual({ showMessage: false})
  })
})