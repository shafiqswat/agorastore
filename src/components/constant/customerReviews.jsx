/** @format */

import React from "react";
import Reviews from "./ProductsReview";

const CustomerReviews = ({ reviewText, userName }) => {
  return (
    <div className='flex flex-col border-b pb-4 mt-4'>
      <Reviews rating={2} />
      <p>{reviewText}</p>
      <small className='mt-1'>{userName}</small>
    </div>
  );
};

export default CustomerReviews;
