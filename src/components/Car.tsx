import React, { HTMLAttributes } from 'react';

// import { Container } from './styles';
interface ICar extends HTMLAttributes<HTMLDivElement>{
  car: {
    id: string;
    name: string;
    url: string;
  }
}

const Car: React.FC<ICar> = ({ car, ...rest }) => {
  return (
    <div className="card mb-3" {...rest}>
      <img src={car.url} className="card-img-top" alt={car.name} style={{objectFit: 'cover', height: '265px'}} />
      <div className="card-body">
        <p className="card-text">{car.name}</p>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
    );
}

export default Car;