import React from "react";
import { useState, useEffect } from "react";

export const useFetchPerson = () => {
  const [loading, setLoading] = useState('loading');
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const FetchData = () => {
      let url = "https://api.github.com/users/QuincyLarson";
      fetch(url)
        .then((response) => {
        //   console.log(response.json());
          return response.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => {
          setLoading(false);
          setError('error');
        //   console.log(err);
        });
    };
    setLoading('loading');
    FetchData();
    setLoading(false);
  }, []);
    return { loading, error, data };
};
