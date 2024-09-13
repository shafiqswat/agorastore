/** @format */

import { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  // Function to handle adding payment method
  const addPaymentMethod = async (paymentMethodDetails) => {
    try {
      const response = await axios.post(
        "https://agora.histudio.co/api/v1/stripe/add-payment-method",
        {
          paymentIntentId: paymentMethodDetails.paymentIntentId,
        }
      );
      setPaymentMethodId(response.data.paymentIntentId); // or handle as needed
    } catch (error) {
      console.error("Error adding payment method:", error);
    }
  };

  return (
    <PaymentContext.Provider value={{ addPaymentMethod, paymentMethodId }}>
      {children}
    </PaymentContext.Provider>
  );
};
