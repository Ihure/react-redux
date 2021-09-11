import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cryptoReducer from "./cryptoReducer";

const appReducer = combineReducers({
  Crypto: cryptoReducer,
  routing: routerReducer,
});

export default appReducer;
