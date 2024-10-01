/** @format */

import { createContext, useContext, useState } from "react";
import axios from "axios";

// Create the context
export const PostReviewContext = createContext();

// Custom hook to use the PostReviewContext
export const usePostReview = () => {
  return useContext(PostReviewContext);
};

// Provider component
export const PostReviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postReview = async (productId, rating, comment) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://agora.histudio.co/api/v1/reviews/${productId}`,
        {
          // userId: "66dc0e9142b1255577dedf7f",
          rating: rating,
          review: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error("Error posting review:", err);
      setError(err.response.data.message || "Failed to post review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostReviewContext.Provider value={{ loading, error, postReview }}>
      {children}
    </PostReviewContext.Provider>
  );
};
