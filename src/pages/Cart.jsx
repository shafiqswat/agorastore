/** @format */

import React, { useState, useContext } from "react";
import CartCard from "../components/cards/CartCard";
import CartTable from "../components/tables/CartTable";
import OrderCard from "../components/cards/OrderCard";
import PaymentModal from "../modals/PaymentModal";
import Header from "../components/layout/Header";
import AddressModal from "../modals/AddressModal";
import { PaymentContext } from "../context/PaymentContext";
import MainWrapper from "../components/common/MainWrapper";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {
    createPaymentIntent,
    confirmPayment,
    paymentIntent,
    paymentDetails,
    error,
  } = useContext(PaymentContext);

  // Function to handle payment creation
  const handleCreatePayment = async () => {
    const amount = 5000; // Example amount
    await createPaymentIntent(amount);
    if (paymentIntent) {
      console.log("Payment Intent Created:", paymentIntent);
      // Add more logic to confirm the payment if needed
    }
  };

  return (
    <div>
      <Header />
      <MainWrapper>
        <div className='grid gap-5 grid-cols-12'>
          <div className='lg:col-span-9 col-span-12'>
            <CartCard
              btnText='Add payment method'
              headingText='Payment method'
              onClick={() => setOpenModal(true)}
            />
            <CartCard
              btnText='Add new address'
              headingText='Shipping address'
              onClick={() => setShowModal(true)}
            />
            <CartTable />
          </div>
          <div className='lg:col-span-3 col-span-12'>
            <OrderCard onPlaceOrder={handleCreatePayment} />
          </div>
        </div>
        <PaymentModal
          isOpen={openModal}
          onOpenChange={setOpenModal}
        />
        <AddressModal
          isOpen={showModal}
          onOpenChange={setShowModal}
        />
      </MainWrapper>
    </div>
  );
};

export default Cart;
