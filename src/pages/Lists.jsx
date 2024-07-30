/** @format */

import React, { useContext, useState } from "react";
import ListsModal from "../components/Modals/ListsModal";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";
import { Card } from "../components/ui/card";
import { ListContext } from "../components/Context/ListContext";
import { AddIcon } from "../components/constant/SvgIcons";
import { Combobox } from "../components/Combobox";

const Lists = () => {
  const { listName, setListName, items, setItems } = useContext(ListContext);
  const [openModal, setOpenModal] = useState(false);
  const [openMap, setOpenMap] = useState({});

  const addItem = () => {
    if (listName.trim() === "") return;
    setItems([...items, { listName }]);
    setListName("");
    setOpenModal(false);
  };

  const removeItem = (index) => {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
  };

  const handleOpenChange = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <Header />
      <Container>
        <Card className='p-5'>
          <h2 className='text-2xl font-semibold'>My Lists</h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-11 gap-5'>
            {items.map((item, index) => (
              <li
                className='group col-span-1 grid-flow-row'
                key={index}>
                <div className='border h-[271px] rounded-xl hover:bg-gray-50 cursor-pointer'></div>
                <div className='flex justify-between mt-3'>
                  <p className='group-hover:underline cursor-pointer text-sm font-semibold w-fit'>
                    {item.listName}
                  </p>
                  <Combobox
                    open={!!openMap[index]}
                    onOpenChange={() => handleOpenChange(index)}
                    onDelete={removeItem}
                    id={index}
                  />
                </div>
              </li>
            ))}
            <li>
              <div
                className='border rounded-xl h-[82px] col-span-1 p-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50'
                onClick={() => setOpenModal(true)}>
                <AddIcon />
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
