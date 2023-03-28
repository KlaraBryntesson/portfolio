import { useEffect, useState } from "react";

export function useFetch() {
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }, []);

  return result;
}
