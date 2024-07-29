/** @format */

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectComponent = ({ placeholder, options }) => {
  return (
    <Select>
      <SelectTrigger id='color'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position='popper'>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            value={option.value}>
            {option.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
