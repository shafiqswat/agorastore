/** @format */
import { fetchReview } from "../../api/index";
import React, { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({ children, productId }) => {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReviewData = async (productId) => {
    try {
      const data = await fetchReview(productId);
      if (Array.isArray(data)) {
        setReviewData(data);
        console.log(data, "Get All Review Successfully");
      } else {
        throw new Error("Fetched data is not an array");
      }
    } catch (err) {
      setError(err);
      setReviewData([]);
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
    <ReviewContext.Provider value={{ reviewData, loading, error }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
