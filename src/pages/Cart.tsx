import React from 'react';
import { useSelector } from 'react-redux';
import Template from '../components/Template';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const { cart } = useSelector((state: any) => state);
  return (
    <Template>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            {cart.length === 0 ? <p className="col-sm-12 mt-5 text-danger text-center">Sem produtos no carrinho ...</p> : (
              <p>Tem produto</p>
            )}
          </div>
        </div>
      </div>
    </Template>
    );
}

export default Cart;