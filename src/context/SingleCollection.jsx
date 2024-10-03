/** @format */

import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCollection } from "../api/index";

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const { collectionId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCollectionData = async (id) => {
    try {
      const response = await fetchSingleCollection(id);
      const collectionProducts = response.data.products;
      setProducts(collectionProducts);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (collectionId) {
      getCollectionData(collectionId);
    }
  }, [collectionId]);

  return (
    <CollectionContext.Provider value={{ products, loading, error }}>
      {children}
    </CollectionContext.Provider>
  );
};
