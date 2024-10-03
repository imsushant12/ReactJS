import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const result = await response.json();

        // Check the API structure and set data correctly
        if (result && result[currency]) {
          setData(result[currency]);
        } else {
          console.error("Unexpected API response:", result);
          setError("Invalid currency data");
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
}

export default useCurrency;
