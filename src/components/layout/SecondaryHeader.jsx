/** @format */

import React from "react";
import { Link } from "react-router-dom";
import SecondaryBtn from "../constant/SecondaryBtn";

const SecondaryHeader = ({
  firstNavLink,
  FirstTo,
  SecondNavLink,
  SecondTo,
}) => {
  return (
    <header className='fixed z-50 top-0 left-0 right-0 w-full px-5 p-3 bg-white shadow-neutral-950 shadow-custom-light'>
      <div className='p-3 flex justify-between items-center'>
        <Link to='/'>
          <img
            className='sm:w-[150px]  w-[120px] lg:ms-4 transition-opacity duration-300 hover:opacity-75'
            src='/images/logo.png'
            alt='LogoImage'
          />
        </Link>
        <div className='lg:me-5 text-[#2b2b2b] flex items-center'>
          <Link
            className='font-Lexend text-[14px] hidden md:block'
            to={FirstTo}>
            {firstNavLink}
          </Link>
          <SecondaryBtn className='border-2 border-black  ms-5'>
            <Link to={SecondTo}>{SecondNavLink}</Link>
          </SecondaryBtn>
        </div>
      </div>
    </header>
  );
};

export default SecondaryHeader;
