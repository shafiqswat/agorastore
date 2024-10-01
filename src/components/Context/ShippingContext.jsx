/** @format */

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create ShippingContext
export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
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

  // Fetch all shipping addresses
  const fetchShippingAddresses = async () => {
    try {
      const data = await apiRequest(
        "get",
        "https://agora.histudio.co/api/v1/shipping/address"
      );
      setAddresses(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a new shipping address
  const addShippingAddress = async (newAddress) => {
    try {
      await apiRequest(
        "post",
        "https://agora.histudio.co/api/v1/shipping/address",
        newAddress
      );
      fetchShippingAddresses(); // Refresh the list after adding
    } catch (error) {
      setError(error.message);
    }
  };

  // Update an existing shipping address
  const updateShippingAddress = async (id, updatedAddress) => {
    try {
      await apiRequest(
        "put",
        `https://agora.histudio.co/api/v1/shipping/address/${id}`,
        updatedAddress
      );
      fetchShippingAddresses(); // Refresh the list after updating
    } catch (error) {
      setError(error.message);
    }
  };

  // Remove a shipping address
  const removeShippingAddress = async (id) => {
    try {
      await apiRequest(
        "delete",
        `https://agora.histudio.co/api/v1/shipping/address/${id}`
      );
      fetchShippingAddresses(); // Refresh the list after deleting
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch addresses on component mount
  useEffect(() => {
    fetchShippingAddresses();
  }, []);

  const value = {
    addresses,
    loading,
    error,
    addShippingAddress,
    updateShippingAddress,
    removeShippingAddress,
  };

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};
