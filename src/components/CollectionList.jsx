/** @format */

import React, { useContext } from "react";
import ProductCard from "./Cards/productCard";
import { CollectionContext } from "./Context/SingleCollection";

const CollectionList = () => {
  const { products } = useContext(CollectionContext);

  return (
    <div className='grid grid-cols-5 p-5 gap-7'>
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
