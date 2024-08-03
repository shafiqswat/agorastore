/** @format */

import React, { useContext } from "react";
import { SimilarProductContext } from "./Context/SimilarProductsContext";
import ProductCard from "./Cards/productCard";

const SimilarProduct = () => {
  const { similarProducts, loading, error } = useContext(SimilarProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!Array.isArray(similarProducts)) {
    return <p>Unexpected error: similarProducts is not an array.</p>;
  }

  return (
    <>
      {similarProducts.length > 0 ? (
        similarProducts.map((similarProduct, i) => (
          <ProductCard
            key={i}
            product={similarProduct}
          />
        ))
      ) : (
        <p>No similar products found.</p>
      )}
    </>
  );
};

export default SimilarProduct;
