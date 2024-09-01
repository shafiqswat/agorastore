/** @format */

import React, { useContext } from "react";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";
import { ChatContext } from "../components/Context/ChatContext";

const Athena = () => {
  const { chatValue } = useContext(ChatContext);
  return (
    <>
      <Header />
      <Container className='h-screen'>
        <div className='w-6/12 mx-auto p-5 flex flex-col gap-5'>
          <div className='border border-blue-200 rounded-tr-sm  w-fit py-3 px-5 ml-auto rounded-2xl bg-blue-50'>
            {chatValue}
          </div>
          <div className='bg-lightgray border p-3 rounded-2xl rounded-tl-sm'>
            {chatValue}! How can I assist you today? Are you looking for any
            specific product recommendations?
          </div>
        </div>
      </Container>
    </>
  );
};

export default Athena;
