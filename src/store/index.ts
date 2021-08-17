import { configureStore } from "@reduxjs/toolkit";
import carsReduce from "./ducks/cars";
import layoutsReduce from "./ducks/layouts";
import cartReduce from "./ducks/cart";


export default configureStore({
  reducer: {
    cars: carsReduce,
    layouts: layoutsReduce,
    cart: cartReduce
  }
})

// export default createStore(rootReducer);