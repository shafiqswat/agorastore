/** @format */

import React from "react";
import SectionHeading from "./SectionHeading";
import SecondaryBtn from "./SecondaryBtn";

const ProductShowcase = ({ headingText, paraText, firstBtn, secondBtn }) => {
  return (
    <div className='discoverBg'>
      <div className='max-w-[1100px] w-full mx-auto px-6'>
        <SectionHeading
          headingText={headingText}
          className=''
        />
        <p className='font-Lexend text-xl max-w-full w-full sm:w-[700px] md:w-[900px] mx-auto my-10 text-center text-[#2b2b2b]'>
          {paraText}
        </p>
        <div className='sm:flex justify-center items-center gap-4'>
          <SecondaryBtn className='bg-customGray h-16 text-white sm:mx-0 mx-auto'>
            {firstBtn}
          </SecondaryBtn>
          <SecondaryBtn className='border-2 border-black h-16 sm:mx-0 mx-auto mt-4 sm:mt-0'>
            {secondBtn}
          </SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
