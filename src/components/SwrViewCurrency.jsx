import React from "react";
import _ from "lodash";

import getCryptos from "../services/cryptos.service";

export default function SwrViewCurrency() {
  const { cryptos, loading } = getCryptos();

  // console.log(cryptos);

  return loading || _.isEmpty(cryptos) ? (
    <span>loading....</span>
  ) : (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {cryptos.map((crypto) => (
        <li key={crypto.id}>{crypto.name}</li>
      ))}
    </ul>
  );
}

//export default SwrViewCurrency;
