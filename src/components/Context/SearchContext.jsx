/** @format */

import React, { createContext, useEffect, useState } from "react";
import { FetchSearchData } from "../../api";

export const SearchContext = createContext();

const SearchContextProvider = ({ children, productName }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const productsData = await FetchSearchData(productName);
      setSearchProducts(productsData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productName) {
      getProducts();
    }
  }, [productName]);

  return (
    <SearchContext.Provider value={{ searchProducts, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
