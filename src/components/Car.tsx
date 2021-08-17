import React, { HTMLAttributes } from 'react';
import { ICar as ICarResult } from "../store/ducks/cars";

interface ICar extends HTMLAttributes<HTMLDivElement>{
  car: {
    id: string;
    name: string;
    url: string;
  }
  addItemCart: (car: ICarResult) => void;
  checkInBascket: (car: ICarResult) => boolean;
  removeItemCart: (car: ICarResult) => void;
}

const Car: React.FC<ICar> = ({ car, addItemCart, removeItemCart, checkInBascket, ...rest }) => {
  const check = checkInBascket(car);
  return (
    <div className="card mb-3" {...rest}>
      <img src={car.url} className="card-img-top" alt={car.name} style={{objectFit: 'cover', height: '265px'}} />
      <div className="card-body">
        <p className="card-text">{car.name}</p>
      </div>
      <div className="card-body">
        {check ? (
          <button type="button" onClick={() => removeItemCart(car)} className="btn btn-danger">Remove</button>
        ): (
          <button type="button" onClick={() => addItemCart(car)} className="btn btn-primary">Add</button>
          )}
      </div>
    </div>
    );
}

export default Car;