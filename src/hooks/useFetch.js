import { useState } from "react";
import { useEffect } from "react";

/**
 *
 * @param {Function} asyncFunc
 * @returns {Promise<Object>} data
 * @returns {Boolean} isLoading
 * @returns {Error | any} error
 */
export function useFetch(asyncFunc) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;
    const executeFunc = async (func) => {
      try {
        setIsLoading(true);
        const resp = await func();
        if (isActive) {
          setData(resp);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    executeFunc(asyncFunc);

    return () => {
      isActive = false;
    };
  }, [asyncFunc]);

  return { data, isLoading, error };
}
