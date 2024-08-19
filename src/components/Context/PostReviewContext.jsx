/** @format */
import { postReview } from "../../api/index";
import React, { createContext, useState } from "react";

export const PostReviewContext = createContext();

export const PostReviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePostReview = async (reviewData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postReview(reviewData);
      console.log("Review posted successfully:", response);
    } catch (err) {
      setError(err.message);
      console.error("Error posting review:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostReviewContext.Provider value={{ handlePostReview, loading, error }}>
      {children}
    </PostReviewContext.Provider>
  );
};
