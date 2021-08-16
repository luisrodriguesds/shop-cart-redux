import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Message: React.FC = () => {
  const isShow = useSelector((state: any) => {
    console.log(state)
    return state.layouts.showMessage
  });

  return (
    <>
    {console.log(isShow, 'aqui')}
    {isShow && (
      <div className="container mt-4">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="alert alert-dismissible alert-success">
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
              Cadastrado com sucesso!
            </div>
          </div>
        </div>
      </div>
    )}
    </>
    );
}

export default Message;