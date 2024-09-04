/** @format */

import React from "react";

const IncreaseSale = ({ paraText, headingText, Icon }) => {
  return (
    <div className='flex  items-center w-80 justify-between mx-auto my-10'>
      <Icon />

      <div className=''>
        <h3 className='font-bold text-xl'>{headingText}</h3>
        <p className='w-60 text-xl'>{paraText}</p>
      </div>
    </div>
  );
};

export default IncreaseSale;
