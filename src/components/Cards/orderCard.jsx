/** @format */

import React from "react";
import { Card } from "../ui/card";
import CustomButton from "../customButton";

function OrderCard() {
  return (
    <Card className='p-5'>
      <h2 className='text-2xl font-semibold'>Order summary</h2>
      <div className='pt-7'>
        <div className='flex justify-between'>
          <p>Subtotal:</p>
          <p>$191.00</p>
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
          <p className='font-bold'>$191.00</p>
        </div>
      </div>
      <CustomButton
        BtnText='Place your order'
        className='w-fit mt-4'
      />
    </Card>
  );
}

export default OrderCard;
