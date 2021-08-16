import React from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import Template from '../components/Template';
import { showMessage, hideMessage } from '../store/ducks/layouts';
import { addPostCar } from '../store/featchActions';

// import { Container } from './styles';

const Add: React.FC = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch()
  const formHandle = (e: FormEvent) => {
    e.preventDefault();

    console.log(name);
    console.log(url);
    dispatch(addPostCar({
      name,
      url
    }))
    setName('')
    setUrl('')

    dispatch(showMessage())
    setTimeout(() => {
      dispatch(hideMessage())
    }, 2500)
  }

  return (
    <Template>
      <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <form onSubmit={formHandle}>
            <div className="form-group">
              <label htmlFor="name" className="form-label mt-4">Email address</label>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="name" placeholder="Product name" />
            </div>
            <div className="form-group">
              <label htmlFor="url" className="form-label mt-4">Image URL</label>
              <input type="text" onChange={(e) => setUrl(e.target.value)} value={url} className="form-control" id="url" placeholder="Image URL" />
            </div>
            <div className="form-group mt-4">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Template>
    );
}

export default Add;