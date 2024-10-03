/** @format */

import React from "react";
import { AddIcon } from "../../assets/SvgIcons";

const PlusButtonList = ({ setOpenModal }) => {
  return (
    <div
      className='border rounded-xl h-[82px] col-span-1 p-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50'
      onClick={() => setOpenModal(true)}>
      <AddIcon />
      <h2 className='text-gray-700'>Create new list</h2>
    </div>
  );
};

export default PlusButtonList;
