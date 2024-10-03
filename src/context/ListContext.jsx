/** @format */

import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listName, setListName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = () => localStorage.getItem("token");

  const apiRequest = async (method, url, data = {}) => {
    const token = getToken();
    if (!token) throw new Error("User is not authenticated");

    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios({ method, url, data, ...config });
    return response.data;
  };

  const fetchLists = async () => {
    try {
      const data = await apiRequest(
        "get",
        "https://agora.histudio.co/api/v1/lists"
      );
      setListName(data.data);
    } catch (err) {
      setError(
        err.response?.status === 401
          ? "Unauthorized. Please log in again."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const createList = async (newListName) => {
    try {
      const data = await apiRequest(
        "post",
        "https://agora.histudio.co/api/v1/lists",
        { name: newListName }
      );
      setListName((prev) => [...prev, data.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteList = async (listId) => {
    try {
      await apiRequest(
        "delete",
        `https://agora.histudio.co/api/v1/lists/${listId}`
      );
      setListName((prev) => prev.filter((list) => list._id !== listId));
    } catch (err) {
      setError(err.message);
    }
  };

  const renameList = async (listId, newName) => {
    try {
      await apiRequest(
        "put",
        `https://agora.histudio.co/api/v1/lists/${listId}`,
        { name: newName }
      );
      setListName((prev) =>
        prev.map((list) =>
          list._id === listId ? { ...list, name: newName } : list
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <ListContext.Provider
      value={{ listName, createList, deleteList, renameList, loading, error }}>
      {children}
    </ListContext.Provider>
  );
};
