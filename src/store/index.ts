import { createStore, combineReducers } from "redux";
import carsReduce from "./cars";
import layoutsReduce from "./layouts";

const rootReducer = combineReducers({
  cars: carsReduce,
  layouts: layoutsReduce
})

export default createStore(rootReducer);