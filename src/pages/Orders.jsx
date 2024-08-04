/** @format */

import React from "react";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";

const Orders = () => {
  return (
    <>
      <Header />
      <Container>
        <div className='p-5 border rounded-xl'>
          <p>
            You have no previous orders. Once you checkout, your order
            information will show here.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Orders;
