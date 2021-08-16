import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  showMessage: false
}

export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
  [showMessage.type]: (state: any) => ({...state, showMessage: true}),
  [hideMessage.type]: (state: any) => ({...state, showMessage: false})
})
