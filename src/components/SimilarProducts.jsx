/** @format */

import React, { useContext } from "react";
import { SimilarProductContext } from "../context/SimilarProductsContext";
import ProductCard from "./cards/ProductCard";
import LoadingSkeleton from "./Skeleton";
import MainWrapper from "./common/MainWrapper";

// Component to handle loading state
const LoadingState = () => (
  <MainWrapper>
    <LoadingSkeleton count={10} />
  </MainWrapper>
);

// Component to handle error state
const ErrorState = ({ message }) => (
  <p className='col-span-full text-center font-Lexend'>Error: {message}</p>
);

// Component to render similar products or fallback message if none are found
const ProductsGrid = ({ products }) => (
  <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
    {products.length > 0 ? (
      products.map((product, i) => (
        <ProductCard
          key={i}
          product={product}
        />
      ))
    ) : (
      <p className='col-span-full text-center font-Lexend'>
        No similar products found.
      </p>
    )}
  </div>
);

const SimilarProduct = () => {
  const { similarProducts, loading, error } = useContext(SimilarProductContext);

  if (error) return <ErrorState message={error.message} />;

  return loading ? (
    <LoadingState />
  ) : (
    <ProductsGrid products={similarProducts} />
  );
};

export default SimilarProduct;
