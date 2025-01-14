import { useEffect, useState } from "react";
import { useLangContext } from "../contexts/LangContext";

const apiKey = import.meta.env.VITE_API_KEY;

function useFetch(url, method, initialData = null) {
  const { language } = useLangContext();
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw Error(language["failedToFetchData"]);
        return res.json();
      })
      .then((data) => setData(data.items ?? data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => fetchData(), [url, method]);

  return { data, loading, error, fetchData };
}

export default useFetch;
