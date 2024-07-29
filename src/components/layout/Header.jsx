/** @format */

import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modals/SigninModal";
import { CartContext } from "../Context/CartContext";
import CustomButton from "../constant/customButton";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const [placeholderText, setPlaceholderText] = useState("Search for products");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const fileInputRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleIcon = () => {
    setIsSearchIcon(!isSearchIcon);
    setPlaceholderText((prevText) =>
      prevText === "Search for products"
        ? "Chat With Athena"
        : "Search for products"
    );
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <header className='max-w-full mx-auto bg-white/20 backdrop-blur-md grid items-center grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 p-5 md:p-10 py-3 md:py-6 fixed top-0 inset-x-0 z-50'>
      <Link
        className='w-max ps-8 md:col-span-1 '
        to='/'>
        <img
          src='/images/logo.png'
          style={{ width: "100px" }}
          alt='Logo'
        />
      </Link>
      <div className='flex items-center w-full gap-1.5 row-start-2 col-span-2 md:row-start-1 md:col-span-2 md:col-start-2'>
        <button
          onClick={toggleIcon}
          className={`items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 bg-neutral-100 border-neutral-100 hover:border-neutral-200 place-items-center grid flex-shrink-0 h-full grid-cols-2 grid-rows-1 p-1 text-black border rounded-full`}>
          <div
            className={`border-neutral-300 w-10 h-10 col-start-1 row-start-1 bg-white border rounded-full shadow transition-transform transform ${isSearchIcon ? "translate-x-0" : "translate-x-full"}`}></div>
          <div
            className={`place-items-center aspect-square w-10 h-10 grid p-0 rounded-full col-start-1 row-start-1 z-10 transition-opacity ${isSearchIcon ? "opacity-100" : "opacity-35"}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-search w-5 h-5'>
              <circle
                cx='11'
                cy='11'
                r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </svg>
          </div>
          <div
            className={`place-items-center aspect-square w-10 h-10 grid p-0 rounded-full col-start-2 row-start-1 z-10 transition-opacity ${isSearchIcon ? "opacity-35" : ""}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-messages-square w-5 h-5'>
              <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z'></path>
              <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1'></path>
            </svg>
          </div>
        </button>
        <form
          method='get'
          action='/search'
          className='md:col-span-3 border-neutral-300 focus-within:border-neutral-500 transition-colors group flex items-center flex-grow gap-2 p-1 pr-1.5 bg-white border rounded-full'>
          <input
            type='text'
            name='q'
            className='focus:outline-none focus:ring-0 w-full px-4 bg-transparent border-none rounded-full'
            placeholder={placeholderText}
            autoComplete='off'
            required=''
          />
          <button
            className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'
            type='button'
            onClick={handleFileUploadClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='1.5'
              aria-hidden='true'
              className='aspect-square h-5'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'></path>
            </svg>
          </button>
          <input
            type='file'
            accept='image/*'
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'
            type='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-right aspect-square h-5'>
              <path d='M5 12h14'></path>
              <path d='m12 5 7 7-7 7'></path>
            </svg>
          </button>
        </form>
      </div>
      <nav className='ml-auto md:col-span-1 lg:pe-10'>
        <ul className='hidden lg:flex items-center gap-3 justify-end'>
          {isLogin && (
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
                  path='/merchants'
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
          <li>
            <CustomButton
              BtnText='Lists'
              className='bg-lightgray text-black hover:bg-gray-100'
            />
          </li>
          <li>
            <CustomButton
              BtnText='Orders'
              className='bg-lightgray text-black hover:bg-gray-100'
            />
          </li>
          <li className='w-10 h-10 bg-lightgray flex justify-center items-center rounded-full hover:gray-200'>
            <Link>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-settings w-5 h-5'>
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'></path>
                <circle
                  cx='12'
                  cy='12'
                  r='3'></circle>
              </svg>
            </Link>
          </li>
          <li className='w-10 h-10 bg-lightgray flex justify-center items-center rounded-full relative hover:bg-gray-100'>
            {cart.length > 0 && (
              <div className='absolute w-3 h-3 bg-red-500 rounded-full right-0 top-0'></div>
            )}
            <Link to='/cart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-shopping-cart w-5 h-5'>
                <circle
                  cx='8'
                  cy='21'
                  r='1'></circle>
                <circle
                  cx='19'
                  cy='21'
                  r='1'></circle>
                <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'></path>
              </svg>
            </Link>
          </li>
        </ul>
        <button
          className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 bg-neutral-100 text-neutral-900 h-10 aspect-square flex lg:hidden rounded-full'
          type='button'
          onClick={toggleMenu}>
          <span className='sr-only'>Toggle Menu</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-menu w-6 h-6'>
            <line
              x1='4'
              x2='20'
              y1='12'
              y2='12'></line>
            <line
              x1='4'
              x2='20'
              y1='6'
              y2='6'></line>
            <line
              x1='4'
              x2='20'
              y1='18'
              y2='18'></line>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div
          role='dialog'
          id='radix-:r8:'
          aria-describedby='radix-:ra:'
          aria-labelledby='radix-:r9:'
          data-state='open'
          className='min-h-screen pointer-events-auto fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-neutral-950 inset-y-0 right-0   w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
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
                <li>
                  <CustomButton
                    BtnText='Merchants'
                    className='bg-transparent text-black'
                    onClick={toggleMenu}
                  />
                </li>
                <li>
                  <CustomButton
                    BtnText='About'
                    className='bg-transparent text-black'
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
              </ul>
            </div>
          </nav>
          <button
            onClick={() => setMenuOpen(false)}
            className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x h-4 w-4'>
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
            <span className='sr-only'>Close</span>
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </header>
  );
};

export default Header;
