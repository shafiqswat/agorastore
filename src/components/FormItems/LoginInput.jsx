/** @format */

import React from "react";
import InputComponent from "./Input";

const LoginInput = ({ placeholder, type, className, value, onChange }) => {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      className={`border-black text-xl h-14 bg-lightgray hover:border-blue-500 focus:outline-none focus:border-none ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default LoginInput;
