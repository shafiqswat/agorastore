/** @format */
import { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  // Function to handle adding payment method
  const addPaymentMethod = async ({ paymentMethodId }) => {
    try {
      const token = localStorage.getItem("token");

      // Sending the correct key "paymentMethodId" in the API request
      const response = await axios.post(
        "https://agora.histudio.co/api/v1/payment/add-method",
        {
          paymentMethodId, // Ensure this key matches the API spec
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPaymentMethodId(response.data.paymentMethodId);
      console.log("Payment method added successfully:", response.data);
    } catch (error) {
      // Logging more information about the error
      if (error.response) {
        console.error("Server Error:", error.response.data);
        console.error("Error Status Code:", error.response.status);
        alert("Unable to add payment method. Please try again.");
      } else if (error.request) {
        console.error("No response received from server:", error.request);
        alert("Unable to add payment method. Please try again.");
      } else {
        console.error("Error setting up the request:", error.message);
        alert("Unable to add payment method. Please try again.");
      }
    }
  };

  return (
    <PaymentContext.Provider value={{ addPaymentMethod, paymentMethodId }}>
      {children}
    </PaymentContext.Provider>
  );
};
