/** @format */

import React from "react";
import Reviews from "./ProductsReview";

const CustomerReviews = ({ reviewText, userName, rating }) => {
  return (
    <div className='flex flex-col mt-4'>
      <Reviews
        rating={rating}
        showRating={false}
      />
      <p>{reviewText}</p>
      <small className='mt-1'>{userName}</small>
    </div>
  );
};

export default CustomerReviews;
