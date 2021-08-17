import React from 'react';
import Car from '../components/Car';
import { useSelector , useDispatch } from "react-redux";
import Template from '../components/Template';
import { useEffect } from 'react';
import { getAllCars } from '../store/featchActions';
import { useCallback } from 'react';
import { addItem, removeItem } from '../store/ducks/cart';
import { ICar } from '../store/ducks/cars';



const Home: React.FC = () => {
  const dispatch = useDispatch()
  const cars: ICar[] = useSelector((state: any) => {
    return state.cars;
  })
  const cart: ICar[] = useSelector((state: any) => state.cart)

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch])

  const addItemCart = useCallback((car: ICar) => {
    dispatch(
      addItem(car)
    )
  }, [dispatch])

  const removeItemCart = useCallback((car: ICar) => {
    dispatch(
      removeItem(car)
    )
  }, [dispatch])

  const checkInBascket = useCallback((car: ICar) => {
    const findCar = cart.find(item => item.id === car.id);
    return !!findCar;
  }, [cart])

  return (
    <Template>
      <div className="container">
        <div className="row mt-4">
            {cars.map((car: any, index: number) => (
              <div className="col-4" key={car.id}>
                <Car 
                  car={car} 
                  addItemCart={addItemCart} 
                  checkInBascket={checkInBascket}
                  removeItemCart={removeItemCart} 
                />
              </div>
            ))}
        </div>
      </div>
    </Template>
    );
}

export default Home;