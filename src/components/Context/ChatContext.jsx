/** @format */

import React, { createContext, useState } from "react";
import { FetchChat } from "../../api/index";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Modify chatInput to include user's message in the chats array.
  const chatInput = async (chatVal) => {
    setLoading(true);

    // First, push the user's message to the chats array.
    setChats((prevChats) => [...prevChats, { isUser: true, message: chatVal }]);

    try {
      const response = await FetchChat(chatVal);
      // Assuming the response structure is { message: 'AI response' }
      const aiMessage = response.data.message; // Adjust this line based on your API response structure

      // Then, push the AI's response to the chats array.
      setChats((prevChats) => [
        ...prevChats,
        { isUser: false, message: aiMessage }, // Assuming AI is not a user
      ]);
    } catch (err) {
      console.error("Error fetching search data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        loading,
        error,
        value,
        setValue,
        chatInput,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
