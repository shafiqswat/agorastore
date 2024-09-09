/** @format */

import { fetchReview } from "../../api/index";
import React, { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({ children, productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReviewData = async (productId) => {
    try {
      const { reviews: reviewData } = await fetchReview(productId);
      setReviews(reviewData);
      console.log(reviewData, "ReviewData");
    } catch (err) {
      setError(err);
      console.log(err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      getReviewData(productId);
    }
  }, [productId]);

  return (
    <ReviewContext.Provider value={{ reviews, loading, error }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
