import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const cart = useSelector((state: any) => state.cart.length);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Shop Car</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Adicionar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Carrinho ({cart})</Link>
          </li>
        </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    );
}

export default Header;