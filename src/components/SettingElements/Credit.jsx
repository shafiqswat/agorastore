/** @format */

import React from "react";
import CustomButton from "../constant/customButton";

const Credit = () => {
  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Credits</h2>
      <p className='text-sm text-neutral-500'>
        You have $0 in Agora credits. This will be automatically redeemed on
        your next purchase.
      </p>
      <CustomButton
        BtnText='Get more credits'
        className='w-fit mt-5'
      />
    </div>
  );
};

export default Credit;
