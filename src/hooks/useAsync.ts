import { useCallback, useEffect, useRef, useState } from "react";

const useAsync = (callback: Function, deps = []) => {
  const [state, setState] = useState({
    isLoading: false,
    error: "",
  });
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setState({ ...state, isLoading: true });

    try {
      const data = await callback();
      setData(data);
    } catch (e) {
      setState({ ...state, error: "API Fetching Error" });
    } finally {
      setState({ ...state, isLoading: false });
    }
  }, [callback, ...deps]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { state, data, fetchData };
};

export default useAsync;
