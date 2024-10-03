/** @format */

import React from "react";
import Header from "../components/layout/Header";
import MainWrapper from "../components/common/MainWrapper";

const Orders = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <div className='p-5 border rounded-xl'>
          <p>
            You have no previous orders. Once you checkout, your order
            information will show here.
          </p>
        </div>
      </MainWrapper>
    </>
  );
};

export default Orders;
