import React from 'react';
import { useSelector } from 'react-redux';
import Template from '../components/Template';
import { ICar } from '../store/ducks/cars';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const cart: ICar[] = useSelector((state: any) => state.cart);
  return (
    <Template>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            {cart.length === 0 ? <p className="col-sm-12 mt-5 text-danger text-center">Sem produtos no carrinho ...</p> : (
              <div className="col-sm-12 mt-5">
                <table className="table table-hover table-edit">
                  <thead>
                    <tr>
                      <th scope="col">Produto</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Entrega</th>
                      <th scope="col">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item => (
                      <tr key={`cart-${item.id}`}>
                        <td>
                          <div className="mini-product">
                            <img src={item.url} alt={item.name} />
                            <span>
                              <p> {item.name}</p>
                              <small> vendido por tal</small>
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                              <button type="button" className="btn btn-secondary"> + </button>
                              <button type="button" className="btn btn-secondary" disabled> 2 </button>
                              <button type="button" className="btn btn-secondary"> - </button>
                            </div>
                          </div>
                        </td>
                        <td>22/12/211</td>
                        <td>R$ 1,000.00</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Template>
    );
}

export default Cart;