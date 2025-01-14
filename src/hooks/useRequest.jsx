import { useState } from "react";
import { useLangContext } from "../contexts/LangContext";

const apiKey = import.meta.env.VITE_API_KEY;

function useRequest() {
  const { language } = useLangContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method, body) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) throw Error(language["failedToFetchData"]);
      const data = await res.json();

      return data.items;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
}

export default useRequest;
