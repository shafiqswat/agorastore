/** @format */

import React from "react";
import { Input } from "../ui/input";

const InputComponent = ({ placeholder, className, onChange, value }) => {
  return (
    <Input
      type='email'
      id='text'
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputComponent;
