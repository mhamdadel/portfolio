import jokesReducer from "./jokesReducer";
import menuReducer from "./menuReducer";
import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  weather: weatherReducer, 
  menu: menuReducer,
  jokes: jokesReducer
});

export default rootReducer;