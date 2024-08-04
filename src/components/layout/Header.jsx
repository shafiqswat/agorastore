/** @format */

import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modals/SigninModal";
import { CartContext } from "../Context/CartContext";
import CustomButton from "../constant/customButton";
import {
  ArrowRightIcon,
  CameraIcon,
  ChatIcon,
  CrossIcon,
  LayoutGridIcon,
  MenuIcon,
  PackageIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
} from "../constant/SvgIcons";
import Container from "./container";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const [placeholderText, setPlaceholderText] = useState("Search for products");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };
  return (
    <Container className='!p-0'>
      <header className='grid items-center md:grid-cols-4 gap-4 bg-white/20 backdrop-blur-md z-50 fixed top-0 py-5 max-w-[1280px] w-full'>
        <Link
          className='w-max ps-8 md:col-span-1 '
          to='/'>
          <img
            src='/images/logo.png'
            style={{ width: "100px" }}
            alt='Logo'
          />
        </Link>
        <div className='flex items-center w-full gap-1.5 row-start-2 col-span-2 md:row-start-1 md:col-span-2 md:col-start-2 pe-2 md:ps-5'>
          <button
            onClick={toggleIcon}
            className={`items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 bg-neutral-100 border-neutral-100 hover:border-neutral-200 place-items-center grid flex-shrink-0 h-full grid-cols-2 grid-rows-1 p-1 text-black border rounded-full`}>
            <div
              className={`border-neutral-300 w-10 h-10 col-start-1 row-start-1 bg-white border rounded-full shadow transition-transform transform ${isSearchIcon ? "translate-x-0" : "translate-x-full"}`}></div>
            <div
              className={`place-items-center aspect-square w-10 h-10 grid p-0 rounded-full col-start-1 row-start-1 z-10 transition-opacity ${isSearchIcon ? "opacity-100" : "opacity-35"}`}>
              <SearchIcon />
            </div>
            <div
              className={`place-items-center aspect-square w-10 h-10 grid p-0 rounded-full col-start-2 row-start-1 z-10 transition-opacity ${isSearchIcon ? "opacity-35" : ""}`}>
              <ChatIcon />
            </div>
          </button>
          <form className='md:col-span-3 border-neutral-300 focus-within:border-neutral-500 transition-colors group flex items-center flex-grow gap-2 p-1 pr-1.5 bg-white border rounded-full'>
            <input
              type='text'
              name='q'
              value={searchValue}
              className='focus:outline-none focus:ring-0 w-full px-4 bg-transparent border-none rounded-full'
              placeholder={placeholderText}
              autoComplete='off'
              required=''
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'
              type='button'
              onClick={handleFileUploadClick}>
              <CameraIcon />
            </button>
            <input
              type='file'
              accept='image/*'
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <button
              onClick={handleSubmit}
              type='button'
              className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'>
              <ArrowRightIcon />
            </button>
          </form>
        </div>
        <nav className='ml-auto md:col-span-1 lg:pe-10'>
          <div className='flex items-center gap-3 justify-end'>
            <ul className='hidden lg:flex gap-3'>
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
              <li className='w-10 h-10 bg-lightgray flex justify-center items-center rounded-full hover:gray-200'>
                <Link to='/settings'>
                  <SettingsIcon />
                </Link>
              </li>
            </ul>
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
            <button
              className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 bg-neutral-100 text-neutral-900 h-10 aspect-square flex lg:hidden rounded-full'
              type='button'
              onClick={toggleMenu}>
              <span className='sr-only'>Toggle Menu</span>
              <MenuIcon />
            </button>
          </div>
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
                  {isLogin && (
                    <>
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
                    </>
                  )}
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
        <Modal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </header>
    </Container>
  );
};

export default Header;
