/** @format */

import React from "react";
import Reviews from "../reviews";
import Hurt from "../Hurt";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link
        to={`/product/${product.id}`}
        onClick={window.scrollTo(0, 0)}>
        <div className='group max-w-[300px] relative rounded-lg'>
          <div className='relative mb-3.5 cursor-pointer'>
            <img
              src={product.image}
              alt={product.name}
              className='aspect-[5/6] border-neutral-200 object-cover w-full border rounded-lg shadow-sm  bg-transparent'
            />
            <div className='bg-black/0 group-hover:bg-black/10 absolute inset-0 transition-colors rounded-lg'></div>
          </div>
          <div className='flex justify-between'>
            <p className=' font-semibold font-sans text-sm'>
              <a href='#'>{product.name}</a>
            </p>
            <Hurt />
          </div>
          <p className='line-clamp-1 text-gray-500 capitalize mb-1 group-hover:underline '>
            {product.description}
          </p>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm font-semibold text-black'>
              ${product.price}
            </span>
          </div>
          <Reviews
            rating={product.rating}
            className='w-4 h-4 cursor-pointer'
          />
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
