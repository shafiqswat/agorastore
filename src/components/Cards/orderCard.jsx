/** @format */

import React, { useContext } from "react";
import { Card } from "../ui/card";
import CustomButton from "../constant/customButton";
import { CartContext } from "../Context/CartContext";
import { PaymentContext } from "../Context/PaymentContext";

const OrderCard = ({ onPlaceOrder }) => {
  const { cart } = useContext(CartContext);
  const { createPaymentIntent, paymentIntent } = useContext(PaymentContext);

  const calculateSubtotal = () => {
    return Array.isArray(cart)
      ? cart.reduce((acc, item) => acc + item.price * item.count, 0)
      : 0;
  };

  const subtotal = calculateSubtotal();

  return (
    <Card className='p-5'>
      <h2 className='text-2xl font-semibold'>Order summary</h2>
      <div className='pt-7'>
        <div className='flex justify-between'>
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Taxes and fees:</p>
          <p>$0.00</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold'>Total:</p>
          <p className='font-bold'>${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <CustomButton
        BtnText='Place your order'
        className='w-fit mt-4'
        onClick={onPlaceOrder}
      />
    </Card>
  );
};

export default OrderCard;
