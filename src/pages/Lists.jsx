/** @format */

import React, { useContext, useState } from "react";
import ListsModal from "../components/Modals/ListsModal";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";
import { Card } from "../components/ui/card";
import { ListContext } from "../components/Context/ListContext";
import { Combobox } from "../components/Combobox";
import { Link, useNavigate } from "react-router-dom";
import NewList from "../components/constant/NewList";

const Lists = () => {
  const route = useNavigate();
  const { listName, setListName, items, setItems } = useContext(ListContext);
  const [openModal, setOpenModal] = useState(false);
  const [openMap, setOpenMap] = useState({});

  const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

  const addItem = () => {
    if (listName.trim() === "") return;
    const newItem = { id: generateId(), listName };
    setItems([...items, newItem]);
    setListName("");
    setOpenModal(false);
  };

  const removeItem = (index) => {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
  };

  const renameItem = (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, listName: newName } : item
    );
    setItems(updatedItems);
  };

  const handleClick = (id) => {
    route(`/lists/${id}`);
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
                key={item.id}>
                <div
                  className='border grid grid-cols-2 gap-1 h-[271px] rounded-xl hover:bg-gray-50 cursor-pointer'
                  onClick={() => handleClick(item.id)}>
                  {/* <img
                    src='/images/product2.webp'
                    alt='Product'
                  />
                  <img
                    src='/images/product2.webp'
                    alt='Product'
                  />
                  <img
                    src='/images/product2.webp'
                    alt='Product'
                  />
                  <img
                    src='/images/product2.webp'
                    alt='Product'
                  /> */}
                </div>
                <div className='flex justify-between mt-3'>
                  <Link to={`/lists/${item.id}`}>
                    <p className='group-hover:underline cursor-pointer text-sm font-semibold w-fit'>
                      {item.listName}
                    </p>
                  </Link>
                  <Combobox
                    open={!!openMap[index]}
                    onOpenChange={() => handleOpenChange(index)}
                    onDelete={() => removeItem(index)}
                    onRename={renameItem}
                    id={item.id}
                    listName={item.listName}
                  />
                </div>
              </li>
            ))}
            <li>
              <NewList setOpenModal={setOpenModal} />
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
