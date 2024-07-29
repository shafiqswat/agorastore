/** @format */

import React, { useState } from "react";
import Container from "../components/layout/container";
import CartCard from "../components/Cards/cartCard";
import CartTable from "../components/Tables/cartTable";
import OrderCard from "../components/Cards/orderCard";
import PaymentModal from "../components/Modals/PaymentModal";
import Header from "../components/layout/Header";
import AddressModal from "../components/Modals/AddressModal";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header />
      <Container>
        <div className='grid gap-5 grid-cols-12'>
          <div className='col-span-9'>
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
          <div className='col-span-3'>
            <OrderCard />
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
