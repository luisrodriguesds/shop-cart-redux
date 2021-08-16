import { configureStore } from "@reduxjs/toolkit";
import carsReduce from "./ducks/cars";
import layoutsReduce from "./ducks/layouts";


export default configureStore({
  reducer: {
    cars: carsReduce,
    layouts: layoutsReduce
  }
})

// export default createStore(rootReducer);