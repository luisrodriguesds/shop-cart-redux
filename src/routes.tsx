import React from 'react';
import { BrowserRouter, Route  } from "react-router-dom";

import Add from "./pages/Add";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Add} path="/add" />
      <Route component={Cart} path="/cart" exact />
    </BrowserRouter>
    );
}

export default Routes;