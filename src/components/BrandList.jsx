/** @format */

import React, { useContext } from "react";
import { BrandContext } from "../components/Context/BrandContext";
import ProductCard from "./Cards/productCard";

const BrandList = () => {
  const { products, loading } = useContext(BrandContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found for this brand</div>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36 mt-5'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export default BrandList;
