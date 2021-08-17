import { createAction, createReducer } from "@reduxjs/toolkit";
import { ICar } from "../cars";


const INITIAL_STATE: any = []
export const addItem = createAction<ICar>('ADD_ITEM')
export const removeItem = createAction<ICar>('REMOVE_ITEM')

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [...state, action.payload],
  [removeItem.type]: (state, action) => state.filter((item: any) => item.id !== action.payload.id)
})

