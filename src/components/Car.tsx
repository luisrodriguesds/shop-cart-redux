import React, { HTMLAttributes } from 'react';

// import { Container } from './styles';
interface ICar extends HTMLAttributes<HTMLDivElement>{
  name: string;
  url: string;
}

const Car: React.FC<ICar> = ({ name, url, ...rest }) => {
  return (
    <div className="card mb-3" {...rest}>
      <img src={url} className="card-img-top" alt={name} style={{objectFit: 'cover', height: '265px'}} />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
    );
}

export default Car;