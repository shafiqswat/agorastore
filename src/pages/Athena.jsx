/** @format */

import React, { useContext } from "react";
import { ChatContext } from "../components/Context/ChatContext";

const Athena = () => {
  const { chatInput } = useContext(ChatContext); // Destructure chatInput function from context
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      chatInput(message); // Call chatInput function with the message
      setMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div>
      <h2>Welcome to the Athena page</h2>
      <form
        onSubmit={handleSubmit}
        className='flex'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type your message here...'
          className='border p-2 rounded'
        />
        <button
          type='submit'
          className='ml-2 p-2 bg-blue-500 text-white rounded'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Athena;
