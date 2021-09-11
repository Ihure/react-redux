import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";

import appReducer from "./reducers";

const middlewares = [];

const configureStore = () => {
  const rootReducer = combineReducers({
    app: appReducer,
  });
  middlewares.push(reduxThunk);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer /* preloadedState, */,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

const store = configureStore();
export default store;
