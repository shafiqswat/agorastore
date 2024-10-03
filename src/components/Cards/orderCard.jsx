/** @format */
import React, { useContext, useState } from "react";
import { Card } from "../elements/Card";
import CustomButton from "../common/CustomButton";
import { CartContext } from "../../context/CartContext";
import { PaymentContext } from "../../context/PaymentContext";
import ConfirmPaymentModal from "../../modals/ConfirmPaymentModal";

const OrderCard = ({ onPlaceOrder }) => {
  const { cart } = useContext(CartContext);
  const { createPaymentIntent, confirmPayment } = useContext(PaymentContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const calculateSubtotal = () => {
    return Array.isArray(cart)
      ? cart.reduce((acc, item) => acc + item.price * item.count, 0)
      : 0;
  };

  const subtotal = calculateSubtotal();

  // Handle place order functionality
  const handlePlaceOrder = () => {
    createPaymentIntent(subtotal * 100); // Amount in cents (e.g., $10.00 => 1000 cents)
    setModalOpen(true); // Show the confirmation modal
  };

  // Handle payment confirmation
  const handleConfirmPayment = () => {
    confirmPayment(); // Confirm payment without needing the paymentIntent.id
    setModalOpen(false); // Close the modal after confirming
    onPlaceOrder(); // Optional: Add your additional order logic
  };

  return (
    <>
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
          onClick={handlePlaceOrder} // Trigger payment intent on place order
        />
      </Card>

      {/* Confirmation Modal */}
      <ConfirmPaymentModal
        isModalOpen={isModalOpen}
        subtotal={subtotal}
        handleConfirmPayment={handleConfirmPayment}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default OrderCard;
