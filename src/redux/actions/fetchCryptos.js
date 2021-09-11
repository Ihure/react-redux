import axios from "axios";

export const fetchCrypto = () => (dispatch) => {
  dispatch(fetchStart());
  return axios
    .get("https://api.coincap.io/v2/assets/?limit=5")
    .then((response) => {
      dispatch(fetchSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchFailed(error.response ? error.response.data : null));
    });
};

export function fetchStart() {
  return {
    type: "FETCH_START",
  };
}

export function fetchSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
}

export function fetchFailed(payload) {
  return {
    type: "FETCH_FAILED",
    payload,
  };
}
