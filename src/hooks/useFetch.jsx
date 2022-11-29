import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const result = await res.json()
      setData(result);
    };

    fetchData().catch(console.error);
  }, [url]);

  return { data };
}

export default useFetch;