/** @format */

import React from "react";

const MainHeading = ({ headingText, className }) => {
  return (
    <>
      <h1
        className={`text-center font-Righteous sm:text-5xl text-4xl  text-[#2b2b2b] ${className}`}>
        {headingText}
      </h1>
    </>
  );
};

export default MainHeading;
