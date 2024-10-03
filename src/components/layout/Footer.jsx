/** @format */

import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import MainWrapper from "../common/MainWrapper";

const Footer = () => {
  const { products } = useContext(ProductContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainWrapper className='md:pt-0'>
      <div className='md:flex justify-between border-t-2 pt-20'>
        <div className='mb-10'>
          <img
            src='/images/logo.png'
            alt='Agora'
            className='w-[100px]'
          />
          <p className='text-xl mt-4 font-semibold text-neutral-500'>
            {products.length} products
          </p>
          <div className='flex mt-3'>
            <img
              src='/images/socialIcon1.png'
              alt='socialMediaIcon'
              className='w-10 h-10 me-5'
            />
            <img
              src='/images/socialIcon2.png'
              alt='socialMediaIcon'
              className='w-10 h-10 me-5'
            />
            <img
              src='/images/socialIcon3.png'
              alt='socialMediaIcon'
              className='w-10 h-10'
            />
          </div>
        </div>
        <div className='grid gap-0 grid-cols-3'>
          <ul>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/'
                onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/about'
                onClick={handleClick}>
                About
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/contact'
                onClick={handleClick}>
                Contact
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/terms'
                onClick={handleClick}>
                Terms
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/privacy'
                onClick={handleClick}>
                Privacy
              </Link>
            </li>
          </ul>
          <ul>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/merchant'
                onClick={handleClick}>
                Merchants
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/docs'
                onClick={handleClick}>
                Docs
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/collections'
                onClick={handleClick}>
                Collections
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/popularproducts'
                onClick={handleClick}>
                Popular products
              </Link>
            </li>
          </ul>
          <ul>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/developerapi'
                onClick={handleClick}>
                Developer API
              </Link>
            </li>
            <li className='text-neutral-500 text-sm mb-2'>
              <Link
                to='/store'
                onClick={handleClick}>
                Store crawler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Footer;
