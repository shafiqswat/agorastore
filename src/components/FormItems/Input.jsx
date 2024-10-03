/** @format */

import React from "react";
import { Input } from "../elements/Input";

const InputComponents = ({ placeholder, type, className, value, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className={`border-black text-xl h-14 bg-lightgray hover:border-blue-500 focus:outline-none focus:border-none ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponents;
