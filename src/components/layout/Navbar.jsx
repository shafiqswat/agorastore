/** @format */
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../constant/customButton";

const Navbar = () => {
  return (
    <nav className='bg-customGray text-white'>
      <div className='flex justify-between py-8 px-12'>
        <Link
          to='/'
          className='hover:opacity-[0.8]'>
          <img
            src='/images/logo1.png'
            alt='Logo'
            className='max-w-36 h-auto'
          />
        </Link>
        <Link to='/login'>
          <CustomButton
            className='text-black bg-white rounded-lg w-24 h-12 ease-in-out transition duration-500 hover:bg-lightbrown hover:text-white'
            BtnText='Log in'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
