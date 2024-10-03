/** @format */

import React, { useContext } from "react";
import Header from "../components/layout/Header";
import { ChatContext } from "../context/ChatContext";
import { ArrowRightIcon } from "../assets/SvgIcons";
import MainWrapper from "../components/common/MainWrapper";

const Athena = () => {
  const { chats, value, setValue, chatInput, loading, error } =
    useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      chatInput(value);
      setValue("");
    }
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <div className='w-full md:w-6/12  mx-auto p-5 flex flex-col gap-5'>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`border border-blue-200 rounded-tr-sm w-fit py-3 px-5 ${chat.isUser ? "ml-auto" : "mr-auto"} rounded-2xl ${chat.isUser ? "bg-blue-50" : "bg-lightgray"}`}>
              {chat.message}
            </div>
          ))}
          {loading && <div>Loading...</div>}
          {error && <div className='text-red-500'>Error: {error.message}</div>}
          <form
            onSubmit={handleSubmit}
            className='mt-5 md:col-span-3 border-neutral-300 focus-within:border-neutral-500 transition-colors group flex items-center flex-grow gap-2 p-1 pr-1.5 bg-white border rounded-full'>
            <input
              type='text'
              name='q'
              value={value}
              className='focus:outline-none focus:ring-0 w-full px-4 bg-transparent border-none rounded-full'
              autoComplete='off'
              placeholder='Say something ...'
              required
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type='submit'
              className='items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 h-10 place-items-center aspect-square group-focus-within:bg-neutral-100 group-focus-within:hover:bg-neutral-200 hover:bg-neutral-200 grid p-0 bg-white rounded-full'>
              <ArrowRightIcon />
            </button>
          </form>
        </div>
      </MainWrapper>
    </>
  );
};

export default Athena;
