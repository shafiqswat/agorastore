/** @format */

import React, { useContext } from "react";
import ProductCard from "./cards/ProductCard";
import { CollectionContext } from "../context/SingleCollection";

const CollectionList = () => {
  const { products } = useContext(CollectionContext);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36 mt-5'>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          product={item}
        />
      ))}
    </div>
  );
};

export default CollectionList;
