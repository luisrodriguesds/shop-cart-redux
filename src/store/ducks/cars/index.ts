import { createAction, createReducer } from "@reduxjs/toolkit";
type Car = {
	id?: string,
	name: string,
	url: string
}

const INITIAL_STATE: Car[] = [];


export const addCar = createAction<Car>('ADD_CAR')
export const addCars = createAction<Car[]>('ADD_CARS')


export default createReducer(INITIAL_STATE, {
	[addCar.type]: (state, action) => [...state, action.payload],
	[addCars.type]: (state, action) => [ ...action.payload]
})
