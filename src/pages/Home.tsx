import React from 'react';
import Car from '../components/Car';
import { useSelector , useDispatch } from "react-redux";
import Template from '../components/Template';
import { useEffect } from 'react';
import { getAllCars } from '../store/featchActions';
import { useCallback } from 'react';
import { addItem } from '../store/ducks/cart';

type ICar = {
  id: string;
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const cars: any = useSelector((state: any) => {
    return state.cars;
  })

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch])

  const addItemCart = useCallback((car: ICar) => {
    console.log(car, 'oid')
    dispatch(
      addItem(car)
    )
  }, [dispatch])

  return (
    <Template>
      <div className="container">
        <div className="row mt-4">
            {cars.map((car: any, index: number) => (
              <div className="col-4" key={car.id}>
                <Car car={car} addItemCart={addItemCart} />
              </div>
            ))}
        </div>
      </div>
    </Template>
    );
}

export default Home;