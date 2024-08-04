/** @format */

// Container.js
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`flex-grow max-w-7xl md:p-8 md:pt-32 relative w-full h-full p-6 pt-40 mx-auto overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Container;
