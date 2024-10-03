/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CustomButton from "../common/CustomButton";
import {
  MenuIcon,
  ShoppingCartIcon,
  SettingsIcon,
  CrossIcon,
  PackageIcon,
  LayoutGridIcon,
} from "../../assets/SvgIcons";
import Modal from "../../modals/SigninModal";
import Container from "../common/MainWrapper";
import SearchForm from "../common/SearchForm";
import { AuthContext } from "../../context/AuthContext";
import MainWrapper from "../common/MainWrapper";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, loading } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  if (loading) {
    return (
      <Container className='!p-0'>
        <header></header>
      </Container>
    );
  }
  return (
    <MainWrapper className='!p-0'>
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
          {/*  */}
          {/*  */}
          {/*  */}
          {menuOpen && (
            <div
              role='dialog'
              id='radix-:r8:'
              aria-describedby='radix-:ra:'
              aria-labelledby='radix-:r9:'
              data-state='open'
              className={`min-h-screen lg:hidden pointer-events-auto fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-neutral-950 inset-y-0 right-0   w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`}
              tabindex='-1'>
              <div className='flex flex-col space-y-2 text-center sm:text-left'>
                <h2 className='text-lg font-semibold text-left'>Menu</h2>
              </div>
              <div
                data-orientation='horizontal'
                role='none'
                class='shrink-0 bg-neutral-200 dark:bg-neutral-800 h-[1px] w-full my-4'></div>
              <nav
                aria-label='Main'
                data-orientation='horizontal'
                dir='ltr'
                className='relative z-10 flex max-w-max flex-1 items-center justify-center mt-4'>
                <div className='relative'>
                  <ul
                    data-orientation='horizontal'
                    className='group flex-1 list-none justify-center flex flex-col items-start gap-4 space-x-0'
                    dir='ltr'>
                    {!isAuthenticated && (
                      <>
                        <li>
                          <CustomButton
                            BtnText='Merchants'
                            path='/merchant'
                            className='bg-transparent shadow-none text-black'
                            onClick={toggleMenu}
                          />
                        </li>
                        <li>
                          <CustomButton
                            BtnText='About'
                            path='/about'
                            className='bg-transparent shadow-none text-black'
                            onClick={toggleMenu}
                          />
                        </li>
                        <li>
                          <CustomButton
                            className='bg-lightbrown text-white hover:bg-amber-700'
                            BtnText='Log in'
                            onClick={() => setIsModalOpen(true)}
                          />
                        </li>
                      </>
                    )}
                    {isAuthenticated && (
                      <>
                        <li>
                          <Link
                            className='flex items-center'
                            to='/lists'>
                            <LayoutGridIcon />
                            <p className='ms-2'>Lists</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='flex items-center'
                            to='/orders'>
                            <PackageIcon />
                            <p className='ms-2'>Orders</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='flex items-center'
                            to='/settings'>
                            <SettingsIcon />
                            <p className='ms-2'>Settings</p>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
              <button
                onClick={() => setMenuOpen(false)}
                className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800'>
                <CrossIcon />
                <span className='sr-only'>Close</span>
              </button>
            </div>
          )}
        </nav>
      </header>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </MainWrapper>
  );
};

export default Header;
