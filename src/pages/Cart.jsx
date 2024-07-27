/** @format */ /** @format */

import React from "react";
import Header from "../components/Header";
import Container from "../components/container";
import CartCard from "../components/Cards/cartCard";
import CartTable from "../components/Tables/cartTable";
import { CardTitle } from "../components/ui/card";
import OrderCard from "../components/Cards/orderCard";

const Cart = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className='grid gap-5 grid-cols-12'>
          <div className='col-span-9'>
            <CartCard
              btnText='Add payment method'
              headingText='Payment method'
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
      </Container>
    </div>
  );
};

export default Cart;
