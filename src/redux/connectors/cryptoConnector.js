import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as CryptoActions from "../actions/fetchCryptos";

function mapStateToProps(state) {
  return {
    crypto: state.app.Crypto,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cryptoActions: {
      ...bindActionCreators(CryptoActions, dispatch),
    },
  };
}

export default function connectToStore(component) {
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
}
