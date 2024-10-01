/** @format */

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectComponent = ({ placeholder, options, value, onChange }) => {
  return (
    <Select
      value={value}
      onValueChange={onChange}>
      <SelectTrigger id='color'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position='popper'>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}>
            {option.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
