/** @format */

import React from "react";
import SectionHeading from "./SectionHeading";
import SecondaryBtn from "./SecondaryBtn";

const ProductShowcase = ({ headingText, paraText, firstBtn, secondBtn }) => {
  return (
    <div className='discoverBg'>
      <div className='max-w-[1100px] mx-auto'>
        <SectionHeading headingText={headingText} />
        <p className='font-Lexend text-xl w-[900px] mx-auto my-10 text-center text-[#2b2b2b]'>
          {paraText}
        </p>
        <div className='flex justify-center'>
          <SecondaryBtn className='bg-customGray h-16 text-white me-7'>
            {firstBtn}
          </SecondaryBtn>
          <SecondaryBtn className='border-2 border-black h-16  ms-5'>
            {secondBtn}
          </SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
