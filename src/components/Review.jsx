/** @format */

import React, { useContext } from "react";
import { ReviewContext } from "./Context/ReviewContext";
import CustomerReviews from "./constant/customerReviews";

const Review = () => {
  const { reviewData, loading, error } = useContext(ReviewContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 px-20 large:px-0'>
      {reviewData.length > 0 ? (
        reviewData.map((review, index) => (
          <div
            key={index}
            className=' border-b pb-4'>
            <CustomerReviews
              reviewText={review.comment}
              rating={review.rating}
              userName='shafiq'
            />
          </div>
        ))
      ) : (
        <div>No reviews available.</div>
      )}
    </div>
  );
};

export default Review;
