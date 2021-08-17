import { createAction, createReducer } from "@reduxjs/toolkit";

export type ICar = {
	id?: string,
	name: string,
	url: string
}

const INITIAL_STATE: ICar[] = [];

export const addCar = createAction<ICar>('ADD_CAR')
export const addCars = createAction<ICar[]>('ADD_CARS')

export default createReducer(INITIAL_STATE, {
	[addCar.type]: (state, action) => [...state, action.payload],
	[addCars.type]: (state, action) => [ ...action.payload]
})
