/** @format */
import React, { forwardRef, useImperativeHandle } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// CreditCardInput.js
const CreditCardInput = forwardRef(({ handlePaymentMethod }, ref) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not yet loaded.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("Stripe Error:", error.message);
    } else {
      console.log("Payment Method created successfully:", paymentMethod.id);
      // Pass the correct key "paymentMethodId" to the handler
      handlePaymentMethod({ paymentMethodId: paymentMethod.id });
    }
  };

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </form>
  );
});

export default CreditCardInput;
