import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

// redux
import connect from "../redux/connectors/cryptoConnector";

const ViewCurrency = ({ cryptoActions, crypto: { isFetching, cryptos } }) => {
  const [cryptoData, setCryptoData] = useState(() => []);
  const [fetching, setFetching] = useState(() => true);

  useEffect(() => {
    cryptoActions.fetchCrypto();
  }, []);

  useEffect(() => {
    setCryptoData(cryptos);
  }, [cryptos]);

  useEffect(() => {
    setFetching(isFetching);
  }, [isFetching]);

  return (
    <>
      {fetching || _.isEmpty(cryptoData) ? (
        <span>loading....</span>
      ) : (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {cryptoData.map((crypto) => (
            <li key={crypto.id}>{crypto.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

ViewCurrency.propTypes = {
  cryptoActions: PropTypes.object.isRequired,
  crypto: PropTypes.object.isRequired,
};

export default connect(ViewCurrency);
