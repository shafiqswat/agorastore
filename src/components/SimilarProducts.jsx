/** @format */

import React, { useContext } from "react";
import { SimilarProductContext } from "./Context/SimilarProductsContext";
import ProductCard from "./Cards/productCard";

const SimilarProduct = () => {
  const { similarProducts, loading, error } = useContext(SimilarProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {similarProducts.map((similarProduct, i) => (
        <ProductCard
          key={i}
          product={similarProduct}
        />
      ))}
    </>
  );
};

export default SimilarProduct;
