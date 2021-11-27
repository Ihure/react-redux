import useSWRImmutable from "swr/immutable"; /* this is to prevent automatic revalidation/refetching of data as data is pretty the same */
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function GetCryptos() {
  const { data, error } = useSWRImmutable(
    "https://api.coincap.io/v2/assets/?limit=5",
    fetcher
  );

  return {
    cryptos: data,
    loading: !error && !data,
    isError: error,
  };
}
