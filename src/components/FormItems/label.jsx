/** @format */

import React from "react";
import { Label } from "../elements/Label";

const LabelComponent = ({ className, text }) => {
  return (
    <>
      <Label
        htmlFor='color'
        className={`text-sm font-medium font-sans ${className}`}>
        {text}
      </Label>
    </>
  );
};

export default LabelComponent;
