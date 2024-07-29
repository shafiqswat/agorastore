/** @format */

import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function CustomButton({ className, onClick, path, BtnText }) {
  return (
    <div>
      <Button
        className={`w-full rounded-full ${className}`}
        onClick={onClick}>
        <Link to={path}>{BtnText}</Link>
      </Button>
    </div>
  );
}

export default CustomButton;
