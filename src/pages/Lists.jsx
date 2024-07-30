/** @format */

import React, { useContext, useState } from "react";
import ListsModal from "../components/Modals/ListsModal";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";
import { Card } from "../components/ui/card";
import { ListContext } from "../components/Context/ListContext";

const Lists = () => {
  const { listName, setListName, items, setItems } = useContext(ListContext);
  const [openModal, setOpenModal] = useState(false);

  const addItem = () => {
    if (listName.trim() === "") return;
    setItems([...items, { listName }]);
    setListName("");
    setOpenModal(false);
  };

  const removeItems = (index) => {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
  };

  return (
    <div>
      <Header />
      <Container>
        <Card className='p-5'>
          <h2 className='text-2xl font-semibold'>My Lists</h2>
          <ul className='grid grid-cols-4 mt-11 gap-5'>
            {items.map((item, index) => (
              <li
                className='group col-span-1 grid-flow-row'
                key={index}>
                <div className='border h-[271px] rounded-xl hover:bg-gray-50 cursor-pointer'></div>
                <div className='flex justify-between mt-3'>
                  <p className='group-hover:underline cursor-pointer text-sm font-semibold w-fit'>
                    {item.listName}
                  </p>
                  <div className='bg-lightgray p-1 rounded-lg cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                      className='w-4 h-4'>
                      <path d='M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'></path>
                    </svg>
                  </div>
                </div>
                <button onClick={() => removeItems(index)}>remove</button>
              </li>
            ))}
            <li>
              <div
                className='border rounded-xl h-[82px] col-span-1 p-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50'
                onClick={() => setOpenModal(true)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                  data-slot='icon'
                  className='w-8 h-8'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path>
                </svg>
                <h2 className='text-gray-700'>Create new list</h2>
              </div>
            </li>
          </ul>
        </Card>
        <ListsModal
          isOpen={openModal}
          onOpenChange={setOpenModal}
          onChange={(e) => setListName(e.target.value)}
          value={listName}
          onSave={addItem}
        />
      </Container>
    </div>
  );
};

export default Lists;
