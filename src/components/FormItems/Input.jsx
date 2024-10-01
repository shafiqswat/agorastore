/** @format */

import React from "react";
import { Input } from "../ui/input";

const InputComponent = ({ placeholder, className, onChange, value, type }) => {
  return (
    <Input
      type={type}
      id='text'
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={true}
    />
  );
};

export default InputComponent;
