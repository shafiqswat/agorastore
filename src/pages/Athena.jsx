/** @format */

import React, { useContext } from "react";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";
import { ChatContext } from "../components/Context/ChatContext";

const Athena = () => {
  const { chats, value, setValue, chatInput, loading, error } =
    useContext(ChatContext);

  const handleSend = () => {
    if (value.trim()) {
      chatInput(value);
      setValue("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className='w-full md:w-6/12  mx-auto p-5 flex flex-col gap-5'>
          {/* Chat display */}
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`border border-blue-200 rounded-tr-sm w-fit py-3 px-5 ${chat.isUser ? "ml-auto" : "mr-auto"} rounded-2xl ${chat.isUser ? "bg-blue-50" : "bg-lightgray"}`}>
              {chat.message}
            </div>
          ))}

          {/* Loading and error messages */}
          {loading && <div>Loading...</div>}
          {error && <div className='text-red-500'>Error: {error.message}</div>}

          {/* Input section */}
          <div className='flex'>
            <input
              type='text'
              className='border border-gray-300 p-2 rounded-l-2xl w-full'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Type your message...'
            />
            <button
              className='bg-blue-500 text-white p-2 rounded-r-2xl'
              onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Athena;
