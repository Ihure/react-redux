import { combineReducers } from "redux";

function isFetching(state = false, action) {
  switch (action.type) {
    case "FETCH_START":
      return true;
    case "FETCH_SUCCESS":
    case "FETCH_FAILED":
      return false;
    default:
      return state;
  }
}

function cryptos(state = [], action) {
  let newState = action.payload;
  switch (action.type) {
    case "FETCH_SUCCESS":
      return [...state, ...newState];
    default:
      return state;
  }
}

const CryptoReducers = combineReducers({
  isFetching,
  cryptos,
});

export default CryptoReducers;
