import api from "../../services/api"
import { addCar, addCars } from "../ducks/cars"

export const getAllCars = () => {
  return (dispatch: any) => {
    api.get('/cars').then(res => {
      console.log(res.data)
      dispatch(addCars(res.data))
    }).catch(console.log)
  }
}

type Car = {
  name: string;
  url: string;
}

export const addPostCar = (car: Car) => {
  return (dispatch: any) => {
    api.post('/cars', car).then(res => dispatch(
      addCar(res.data)
    ))
    .catch(console.log)
  }
}