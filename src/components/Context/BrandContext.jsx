/** @format */
import { BrandProduct } from "../../api/index";
import React, { createContext, useState, useEffect, useCallback } from "react";

export const BrandContext = createContext();

const BrandProvider = ({ children, brandName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState(brandName);

  const fetchProducts = useCallback(async () => {
    try {
      const ProductsData = await BrandProduct(brandName);
      setProducts(Array.isArray(ProductsData) ? ProductsData : []);
    } catch (error) {
      console.error("Error fetching brand products:", error);
    } finally {
      setLoading(false);
    }
  }, [brandName]);

  useEffect(() => {
    setBrand(brandName);
    fetchProducts();
  }, [brandName, fetchProducts]);

  return (
    <BrandContext.Provider value={{ products, brand, loading }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;
