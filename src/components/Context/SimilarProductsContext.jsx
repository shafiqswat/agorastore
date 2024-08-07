/** @format */
/** @format */

import React, { createContext, useState, useEffect } from "react";
import { fetchSimilarProducts } from "../../../src/api/index";

export const SimilarProductContext = createContext();

const SimilarProductsProvider = ({ children, productId }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const productsData = await fetchSimilarProducts(productId);
      if (Array.isArray(productsData)) {
        setSimilarProducts(productsData);
      } else {
        throw new Error("Fetched data is not an array");
      }
      console.log(productsData, "Fetched Similar Products Successfully");
    } catch (err) {
      setError(err);
      setSimilarProducts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (productId) {
      getProducts();
    }
  }, [productId]);

  return (
    <SimilarProductContext.Provider value={{ similarProducts, loading, error }}>
      {children}
    </SimilarProductContext.Provider>
  );
};

export default SimilarProductsProvider;
