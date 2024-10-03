/** @format */

import React from "react";
import SocialButton from "./SocialButton";
import MainHeading from "./MainHeading";

const ProductShowcase = ({ headingText, paraText, firstBtn, secondBtn }) => {
  return (
    <div className='discoverBg'>
      <div className='max-w-[1100px] w-full mx-auto px-6'>
        <MainHeading
          headingText={headingText}
          className=''
        />
        <p className='font-Lexend text-xl max-w-full w-full sm:w-[700px] md:w-[900px] mx-auto my-10 text-center text-[#2b2b2b]'>
          {paraText}
        </p>
        <div className='sm:flex justify-center items-center gap-4'>
          <SocialButton className='bg-customGray h-16 text-white sm:mx-0 mx-auto'>
            {firstBtn}
          </SocialButton>
          <SocialButton className='border-2 border-black h-16 sm:mx-0 mx-auto mt-4 sm:mt-0'>
            {secondBtn}
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
