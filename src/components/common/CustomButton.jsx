/** @format */

import React from "react";
import { Button } from "../elements/Button";
import { Link } from "react-router-dom";

const CustomButton = ({ className, onClick, path, BtnText, type }) => {
  return (
    <div>
      <Button
        className={`w-full rounded-full ${className}`}
        onClick={onClick}
        type={type}>
        <Link to={path}>{BtnText}</Link>
      </Button>
    </div>
  );
};

export default CustomButton;
