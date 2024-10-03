/** @format */

import React from "react";
import IncreaseSale from "../layout/IncreaseSale";
import {
  CommissionIcon,
  IncreaseCartIcon,
  RefreshIcon,
} from "../../assets/SvgIcons";
import { useNavigate } from "react-router-dom";

const AuthSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-lightgray md:w-[645px] w-full h-fit'>
      <div className='py-16'>
        <img
          src='/images/logo.png'
          alt='Logo'
          className='w-44 mx-auto cursor-pointer'
          onClick={() => navigate("/")}
        />
        <IncreaseSale
          headingText='Increase sales'
          paraText='Showcase your products in 50,000 monthly searches'
          Icon={IncreaseCartIcon}
        />
        <IncreaseSale
          headingText='Commission free'
          paraText='We bring you more sales without taking a margin'
          Icon={CommissionIcon}
        />
        <IncreaseSale
          headingText='Hassle free'
          paraText='Automatic upload and refresh of your product inventory'
          Icon={RefreshIcon}
        />
      </div>
    </div>
  );
};

export default AuthSidebar;
