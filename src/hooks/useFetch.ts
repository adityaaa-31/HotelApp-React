import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [apiData, setApiData] = useState<JSON>();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setApiData(data));
  }, [url]);

  return apiData;
}
