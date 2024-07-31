/** @format */

import React, { useContext } from "react";
import { PopularProductContext } from "../components/Context/PopularProductContext";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";
import ProductCard from "../components/Cards/productCard";

const PopularProducts = () => {
  const { popularProducts, loading, error } = useContext(PopularProductContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <Container>
        <div>
          <h2 className='font-bold text-2xl text-center mb-20'>
            Popular products
          </h2>
          <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
            {popularProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
export default PopularProducts;
