/** @format */

/** @format */
import { useParams } from "react-router-dom";
import { BrandProduct } from "../api/index";
import React, { createContext, useState, useEffect } from "react";

export const BrandContext = createContext();

const BrandProvider = ({ children }) => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const ProductsData = await BrandProduct(brandName);
      setProducts(ProductsData.data);
    } catch (error) {
      console.error("Error fetching brand products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [brandName]);

  return (
    <BrandContext.Provider value={{ products, loading }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;
