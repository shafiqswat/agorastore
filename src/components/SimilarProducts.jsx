/** @format */

import React, { useContext } from "react";
import { SimilarProductContext } from "./Context/SimilarProductsContext";
import ProductCard from "./Cards/productCard";
import LoadingSkeleton from "./Skeleton";
import Container from "./layout/container";

const SimilarProduct = () => {
  const { similarProducts, loading, error } = useContext(SimilarProductContext);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {loading ? (
        <Container>
          <LoadingSkeleton count={10} />
        </Container>
      ) : (
        <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
          {similarProducts.map((similarProduct, i) => (
            <ProductCard
              key={i}
              product={similarProduct}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SimilarProduct;
