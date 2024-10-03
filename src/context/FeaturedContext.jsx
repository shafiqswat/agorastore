/** @format */
import { fetchCollection } from "../api/index";
import React, { createContext, useEffect, useState } from "react";

export const FeaturedContext = createContext();

export const FeaturedProvider = ({ children }) => {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCollectionData = async () => {
    try {
      const CollectionData = await fetchCollection();
      setFeaturedData(CollectionData.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <FeaturedContext.Provider
      value={{ featuredData, loading, error, setError, setLoading }}>
      {children}
    </FeaturedContext.Provider>
  );
};
