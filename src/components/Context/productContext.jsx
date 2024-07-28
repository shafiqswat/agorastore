/** @format */
import { fetchProducts } from "../../api/index";
import React, { createContext, useState, useEffect } from "react";
import aproducts from "../assets/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const productsData = await fetchProducts();
    //     setProducts(productsData);
    //   } catch (err) {
    //     setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getProducts();
    const getProducts = aproducts;
    setProducts(getProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
