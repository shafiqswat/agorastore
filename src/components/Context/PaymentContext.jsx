/** @format */

import React, { createContext, useState } from "react";
import axios from "axios";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null);

  // API base URL
  const apiBaseUrl = "https://agora.histudio.co/api/v1/stripe";

  // Create Payment Intent
  const createPaymentIntent = async (amount) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/create-payment-intent`, {
        amount,
      });
      setPaymentIntent(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Confirm Payment
  const confirmPayment = async (paymentIntentId, paymentMethodId) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/confirm-payment`, {
        paymentIntentId,
        paymentMethodId,
      });
      setPaymentDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch Payment Details
  const fetchPaymentDetails = async (paymentIntentId) => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/payment-details/${paymentIntentId}`
      );
      setPaymentDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Add Payment Method
  const addPaymentMethod = async (paymentMethodDetails) => {
    try {
      const response = await axios.post(
        `${apiBaseUrl}/add-payment-method`,
        paymentMethodDetails
      );
      setPaymentDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Refund Payment
  const refundPayment = async (paymentIntentId) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/refund`, {
        paymentIntentId,
      });
      setPaymentDetails(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        createPaymentIntent,
        confirmPayment,
        fetchPaymentDetails,
        addPaymentMethod,
        refundPayment,
        paymentIntent,
        paymentDetails,
        error,
      }}>
      {children}
    </PaymentContext.Provider>
  );
};
