/** @format */

import React from "react";
import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const CreditCardInput = () => {
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs();

  return (
    <PaymentInputsWrapper>
      <svg {...getCardImageProps({ images })} />
      <input
        className='border-none font-[Roboto] placeholder:text-blue-300 text-base font-medium'
        {...getCardNumberProps({
          // onChange: (e) => setCardNumber(e.target.value),
        })}
      />
      <input
        className='border-none font-[Roboto] placeholder:text-blue-300 text-base font-medium'
        {...getExpiryDateProps({
          // onChange: (e) => setCardExpiry(e.target.value),
        })}
      />
      <input
        className='border-none font-[Roboto] placeholder:text-blue-300 text-base font-medium'
        {...getCVCProps({
          // onChange: (e) => setCardCVC(e.target.value),
        })}
      />
    </PaymentInputsWrapper>
  );
};

export default CreditCardInput;
