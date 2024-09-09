/** @format */

import React, { useState, useContext } from "react";
import Container from "../components/layout/container";
import CartCard from "../components/Cards/cartCard";
import CartTable from "../components/Tables/cartTable";
import OrderCard from "../components/Cards/orderCard";
import PaymentModal from "../components/Modals/PaymentModal";
import Header from "../components/layout/Header";
import AddressModal from "../components/Modals/AddressModal";
import { PaymentContext } from "../components/Context/PaymentContext";

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
      <Container>
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
      </Container>
    </div>
  );
};

export default Cart;
