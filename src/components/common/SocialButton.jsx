/** @format */

import React from "react";

const SocialButton = ({ children, className }) => {
  return (
    <>
      <button
        className={`block text-[14px] h-[50px] w-fit sm:px-6 px-3 rounded font-Lexend text-center ${className}`}>
        {children}
      </button>
    </>
  );
};

export default SocialButton;
