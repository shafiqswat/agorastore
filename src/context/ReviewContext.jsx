/** @format */

import { fetchReview } from "../api/index";
import React, { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({ children, productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const getReviewData = async (productId) => {
    try {
      const response = await fetchReview(productId);
      const reviewsData = response?.data?.reviews;
      setReviews(reviewsData);
    } catch (err) {
      setError(err);
      console.error("Error fetching reviews:", err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to be called when a new review is added
  const handleNewReview = () => {
    setTrigger((prevTrigger) => !prevTrigger); // Toggle the trigger state
  };

  useEffect(() => {
    if (productId) {
      getReviewData(productId);
    }
  }, [productId, trigger]); // Depend on trigger to re-fetch reviews

  return (
    <ReviewContext.Provider
      value={{ reviews, loading, error, handleNewReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
