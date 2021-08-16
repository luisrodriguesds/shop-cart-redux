import { showMessage, hideMessage } from ".";

describe('Layout Actions', () => {
  describe('Actions types', () => {
    it('should return the action type SHOW_MESSAGE', () => {
      expect(showMessage.type).toEqual('SHOW_MESSAGE');
    })

    it('should return the action type HIDE_MESSAGE', () => {
      expect(hideMessage.type).toEqual('HIDE_MESSAGE');
    })
  })
})