import React from 'react';
import Car from '../components/Car';
import { useSelector  } from "react-redux";
import Template from '../components/Template';


const Home: React.FC = () => {
  
  const cars: any = useSelector((state: any) => state.cars)

  return (
    <Template>
      <div className="container">
        <div className="row mt-4">
            {cars.map((car: any, index: number) => (
              <div className="col-4" key={index}>
                <Car name={car.name} url={car.url} />
              </div>
            ))}
        </div>
      </div>
    </Template>
    );
}

export default Home;