/** @format */

import React, { createContext, useState } from "react";
import { FetchSearchData } from "../../api/index";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProductsByName = async (productName) => {
    setLoading(true); // Set loading to true before starting the fetch
    setError(null); // Clear previous errors

    try {
      const productsData = await FetchSearchData(productName);
      setSearchProducts(productsData);
      console.log(productsData, "Search Items");
    } catch (err) {
      console.error("Error fetching search data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        loading,
        error,
        value,
        setValue,
        searchProductsByName,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
