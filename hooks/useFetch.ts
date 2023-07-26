import React, { useEffect, useState } from "react";
import { api } from "../config/axios";

interface initialStatus {
  data: [];
  isLoading: boolean;
  error: any;
}

export const useFetch = (url: string) => {
  const [value, setValue] = useState<initialStatus>({
    data: [],
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      try {
        setValue((preState) => ({ ...preState, isLoading: true }));
        const fetchRequest = await api.get(url);
        const response = await fetchRequest.data;
        setValue((preState) => ({ ...preState, data: response }));
      } catch (err) {
        setValue((preState) => ({ ...preState, error: err }));
      } finally {
        setValue((preState) => ({ ...preState, isLoading: false }));
      }
    }
    fetchData();
  }, [url]);

  return { ...value };
};
