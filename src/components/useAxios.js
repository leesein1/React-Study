import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const defaultAxios = axios.create();

const useAxios = (option, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = useCallback(() => {
    setTrigger(Date.now());
  }, []);

  useEffect(() => {
    if (!option?.url) return;

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    axiosInstance(option)
      .then((response) => {
        setState({
          loading: false,
          data: response.data,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          loading: false,
          data: null,
          error,
        });
      });
  }, [trigger]); 

  return { ...state, refetch };
};

export default useAxios;
