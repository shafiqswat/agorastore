/** @format */

import React, { createContext, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chatValue, setChatValue] = useState("");

  return (
    <ChatContext.Provider value={{ chatValue, setChatValue }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
