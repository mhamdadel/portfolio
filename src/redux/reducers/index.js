import menuReducer from "./menuReducer";
import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  weather: weatherReducer, 
  menu: menuReducer
});

export default rootReducer;