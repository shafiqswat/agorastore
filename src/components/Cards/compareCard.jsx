/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

function CompareCard({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${item._id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div onClick={handleClick}>
      <img
        src={item.images}
        alt='Compare Card'
        className='mx-auto w-40 h-40 border border-neutral-200 bg-white rounded-lg cursor-pointer'
      />
      <p className='max-w-[211px] mx-auto mt-2 font-medium text-sm text-gray-500 capitalize'>
        {item.description}
      </p>
    </div>
  );
}

export default CompareCard;
