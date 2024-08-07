/** @format */

import { fetchPopularProducts } from "../../api/index";
import React, { createContext, useState, useEffect } from "react";

const PopularProductContext = createContext();

const PopularProductProvider = ({ children }) => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPopularProducts = async () => {
    try {
      const data = await fetchPopularProducts();
      setPopularProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadPopularProducts();
  }, []);

  return (
    <PopularProductContext.Provider value={{ popularProducts, loading, error }}>
      {children}
    </PopularProductContext.Provider>
  );
};

export { PopularProductProvider, PopularProductContext };
