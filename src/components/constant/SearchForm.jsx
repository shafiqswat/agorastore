/** @format */

import React, { useState, useRef, useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import {
  ArrowRightIcon,
  CameraIcon,
  ChatIcon,
  SearchIcon,
} from "../constant/SvgIcons";
import { useNavigate } from "react-router-dom";

import { ChatContext } from "../Context/ChatContext";

const SearchForm = () => {
  const { value, setValue, searchProductsByName } = useContext(SearchContext);
  const { chatInput } = useContext(ChatContext);
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const [placeholderText, setPlaceholderText] = useState("Search for products");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

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
    if (placeholderText === "Search for products" && value) {
      searchProductsByName(value);
      navigate(`/search/${encodeURIComponent(value)}`);
      setValue("");
    } else if (placeholderText === "Chat With Athena" && value) {
      chatInput(value);
      navigate("/search/athena");
      setValue("");
    }
  };

  return (
    <div className='flex items-center w-full gap-1.5'>
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
          className={`place-items-center aspect-square w-10 h-10 grid p-0 rounded-full col-start-2 row-start-1 z-10 transition-opacity ${isSearchIcon ? "opacity-35" : "opacity-100"}`}>
          <ChatIcon />
        </div>
      </button>
      <form
        onSubmit={handleSubmit}
        className='md:col-span-3 border-neutral-300 focus-within:border-neutral-500 transition-colors group flex items-center flex-grow gap-2 p-1 pr-1.5 bg-white border rounded-full'>
        <input
          type='text'
          name='q'
          value={value}
          className='focus:outline-none focus:ring-0 w-full px-4 bg-transparent border-none rounded-full'
          placeholder={placeholderText}
          autoComplete='off'
          required
          onChange={(e) => setValue(e.target.value)}
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
          type='submit'
          className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'>
          <ArrowRightIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
