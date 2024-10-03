/** @format */
import { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentMethodId, setPaymentMethodId] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentIntent, setPaymentIntent] = useState(null); // Store payment intent
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle adding payment method
  const addPaymentMethod = async ({ paymentMethodId }) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://agora.histudio.co/api/v1/payment/add-method",
        {
          paymentMethodId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPaymentMethodId(response.data.paymentMethodId);
      alert("Payment method added successfully!");
      getPaymentMethods();
    } catch (error) {
      setError("Unable to add payment method. Please try again.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to create payment intent
  const createPaymentIntent = async (amount) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://agora.histudio.co/api/v1/payment/create-intent",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPaymentIntent(response.data.paymentIntent);
      console.log(response);
      alert("Payment intent created successfully!");
    } catch (error) {
      setError("Unable to create payment intent. Please try again.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get all payment methods
  const getPaymentMethods = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://agora.histudio.co/api/v1/payment/methods",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPaymentMethods(response.data.data.paymentMethods);
    } catch (error) {
      setError("Unable to fetch payment methods. Please try again.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };
  // confirm payment
  // Function to confirm the payment
  const confirmPayment = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://agora.histudio.co/api/v1/payment/confirm",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Payment confirmed successfully!");
    } catch (error) {
      setError("Unable to confirm the payment. Please try again.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a payment method
  const deletePaymentMethod = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://agora.histudio.co/api/v1/payment/method/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Payment method deleted successfully!");
      getPaymentMethods();
    } catch (error) {
      setError("Unable to delete payment method. Please try again.");
      console.error("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        addPaymentMethod,
        getPaymentMethods,
        deletePaymentMethod,
        createPaymentIntent,
        paymentMethodId,
        paymentMethods,
        paymentIntent,
        confirmPayment,
        loading,
        error,
      }}>
      {children}
    </PaymentContext.Provider>
  );
};
