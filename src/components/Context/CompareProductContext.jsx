/** @format */
import React, { createContext, useState, useEffect } from "react";
import { fetchSimilarProducts } from "../../api/index";

export const CompareContext = createContext();

const CompareProductProvider = ({ children, productId }) => {
  const [compareProduct, setCompareProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const productsData = await fetchSimilarProducts(productId);
      setCompareProduct(productsData.data);
    } catch (err) {
      setError(err);
      setCompareProduct([]);
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
    <CompareContext.Provider value={{ compareProduct, loading, error }}>
      {children}
    </CompareContext.Provider>
  );
};

export default CompareProductProvider;
