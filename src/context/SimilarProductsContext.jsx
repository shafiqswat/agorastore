/** @format */
import React, { createContext, useState, useEffect } from "react";
import { fetchSimilarProducts } from "../api/index";
import { useParams } from "react-router-dom";

export const SimilarProductContext = createContext();

const SimilarProductsProvider = ({ children }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  console.log(productId, "idddddddddddddddddd");
  const getProducts = async () => {
    try {
      const productsData = await fetchSimilarProducts(productId);
      setSimilarProducts(productsData.data);
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
