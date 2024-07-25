/** @format */

import { fetchCollection } from "../../../src/api/index";
import React, { createContext, useEffect, useState } from "react";

export const FeaturedContext = createContext();

export const FeaturedProvider = ({ children }) => {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCollectionData = async () => {
      try {
        const CollectionData = await fetchCollection();
        setFeaturedData(CollectionData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCollectionData();
  }, []);

  return (
    <FeaturedContext.Provider value={{ featuredData, loading, error }}>
      {children}
    </FeaturedContext.Provider>
  );
};
