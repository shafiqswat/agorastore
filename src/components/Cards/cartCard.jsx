/** @format */

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import CustomButton from "../constant/customButton";

const CartCard = ({ headingText, btnText, onClick }) => {
  return (
    <Card className='shadow-none mb-5'>
      <CardHeader className='border-b'>
        <h2 className='text-2xl font-semibold'>{headingText}</h2>
      </CardHeader>
      <CardContent className='px-8 pt-5 pb-10'>
        <CustomButton
          onClick={onClick}
          BtnText={btnText}
          className='w-fit'
        />
      </CardContent>
    </Card>
  );
};

export default CartCard;
