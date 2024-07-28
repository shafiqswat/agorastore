/** @format */

import React, { useState } from "react";
import Header from "../components/Header";
import Container from "../components/container";
import CartCard from "../components/Cards/cartCard";
import CartTable from "../components/Tables/cartTable";
import OrderCard from "../components/Cards/orderCard";
import PaymentModal from "../components/Modals/PaymentModal";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
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
      </Container>
    </div>
  );
};

export default Cart;
