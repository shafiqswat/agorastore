/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modals/SigninModal";
import { CartContext } from "../Context/CartContext";
import CustomButton from "../constant/customButton";
import { MenuIcon, SettingsIcon, ShoppingCartIcon } from "../constant/SvgIcons";
import Container from "./container";
import SearchForm from "../constant/SearchForm";
import { LoginContext } from "../Context/auth/Login";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { isAuthenticated } = useContext(LoginContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container className='!p-0'>
      <header className='grid px-5 items-center md:grid-cols-4 gap-4 bg-white/20 backdrop-blur-md z-50 fixed top-0 py-5 max-w-[1280px] w-full'>
        <Link
          className='w-max ps-2 md:col-span-1'
          to='/'>
          <img
            src='/images/logo.png'
            className='w-[100px]'
            alt='Logo'
          />
        </Link>
        <div className='row-start-2 col-span-2 md:row-start-1 md:col-span-2 md:col-start-2 pe-2 md:ps-5'>
          <SearchForm />
        </div>
        <nav className='ml-auto md:col-span-1 lg:pe-10'>
          <div className='flex items-center gap-3 justify-end'>
            <ul className='hidden lg:flex gap-3'>
              {!isAuthenticated && (
                <>
                  <li>
                    <CustomButton
                      BtnText='About'
                      path='/about'
                      className='bg-lightgray hover:bg-gray-100 text-black'
                    />
                  </li>
                  <li>
                    <CustomButton
                      BtnText='Merchants'
                      path='/merchant'
                      className='bg-lightgray hover:bg-gray-100 text-black'
                    />
                  </li>
                  <CustomButton
                    className='bg-lightbrown text-white hover:bg-amber-700'
                    BtnText='Log in'
                    onClick={() => setIsModalOpen(true)}
                  />
                </>
              )}
              {isAuthenticated && (
                <>
                  <li>
                    <CustomButton
                      BtnText='Lists'
                      path='/lists'
                      className='bg-lightgray text-black hover:bg-gray-100'
                    />
                  </li>
                  <li>
                    <CustomButton
                      BtnText='Orders'
                      path='/orders'
                      className='bg-lightgray text-black hover:bg-gray-100'
                    />
                  </li>
                  <li className='w-10 h-10 bg-lightgray flex justify-center items-center rounded-full hover:bg-gray-200'>
                    <Link to='/settings'>
                      <SettingsIcon />
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {isAuthenticated && (
              <ul>
                <li className='w-10 h-10 bg-lightgray flex justify-center items-center rounded-full relative hover:bg-gray-100'>
                  {cart.length > 0 && (
                    <div className='absolute w-3 h-3 bg-red-500 rounded-full right-0 top-0'></div>
                  )}
                  <Link to='/cart'>
                    <ShoppingCartIcon />
                  </Link>
                </li>
              </ul>
            )}
            <button
              className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 bg-neutral-100 text-neutral-900 h-10 aspect-square flex lg:hidden rounded-full'
              type='button'
              onClick={toggleMenu}>
              <span className='sr-only'>Menu</span>
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </Container>
  );
};

export default Header;
