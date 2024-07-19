/** @format */

import React from "react";

function CompareCard({ item }) {
  return (
    <div className='max-w-[343px] text-center'>
      <img
        src={item.image}
        alt='Compare Image'
        className='mx-auto w-40 h-40 border border-neutral-200 bg-white rounded-lg cursor-pointer'
      />
      <p className='max-w-[211px] mx-auto mt-2 font-medium text-sm text-gray-500 capitalize'>
        {item.paraText}
      </p>
    </div>
  );
}

export default CompareCard;
