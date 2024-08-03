/** @format */

import React from "react";
import Reviews from "../constant/ProductsReview";
import Hurt from "../constant/Hurt";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${product._id}`);
  };

  return (
    <div onClick={handleLinkClick}>
      <div className='group max-w-[300px] relative rounded-lg'>
        <div className='relative mb-3.5 cursor-pointer'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='aspect-[5/6] border-neutral-200 object-cover w-full border rounded-lg shadow-sm bg-transparent'
          />
          <div className='bg-black/0 group-hover:bg-black/10 absolute inset-0 transition-colors rounded-lg'></div>
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold font-sans text-sm hover:underline'>
            <a href='#'>{product.name}</a>
            {/* <h2>{product._id}</h2> */}
          </p>
          <Hurt />
        </div>
        <div className='text-gray-500 capitalize mb-1 overflow-hidden whitespace-nowrap text-ellipsis w-[136px]'>
          {product.description}
        </div>
        <Reviews
          rating={product.rating}
          className='w-4 h-4 cursor-pointer'
        />
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm font-semibold text-black'>
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
