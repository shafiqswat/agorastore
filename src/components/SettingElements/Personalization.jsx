/** @format */

import React from "react";

const Personalization = () => {
  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Personalization</h2>
      <p className='text-sm text-neutral-500'>
        Select up to 5 categories to customize your Agora home page.
      </p>
      <div className='grid grid-cols-5 mt-5 gap-5'>
        <div className='focus:border'>
          <img
            src='/images/compare1.webp'
            className='w-48 h-40 rounded-lg cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Personalization;
