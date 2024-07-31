/** @format */

import { fetchSimilarProducts } from "../../../src/api/index";
import React, { createContext, useState, useEffect } from "react";

export const SimilarProductContext = createContext();

const SimilarProductsProvider = ({ children, productId }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchSimilarProducts(productId);
        setSimilarProducts(productsData);
        console.log(productsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
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
