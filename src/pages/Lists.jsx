/** @format */

import React, { useContext, useState } from "react";
import ListsModal from "../modals/ListsModal";
import Header from "../components/layout/Header";
import { Card } from "../components/elements/Card";
import { ListContext } from "../context/ListContext";
import { Link, useNavigate } from "react-router-dom";
import Combobox from "../components/Combobox";
import PlusButtonList from "../components/common/PlusButtonList";
import MainWrapper from "../components/common/MainWrapper";

const Lists = () => {
  const route = useNavigate();
  const { listName, deleteList, createList, renameList } =
    useContext(ListContext);
  const [openModal, setOpenModal] = useState(false);
  const [openMap, setOpenMap] = useState({});
  const [newListName, setNewListName] = useState(""); // For the new list's name

  // Remove generateId and addItem functions since we're using createList from context

  const addItem = () => {
    if (newListName.trim() === "") return;
    createList(newListName);
    setNewListName("");
    setOpenModal(false);
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

  // Remove removeItem and renameItem functions

  return (
    <div>
      <Header />
      <MainWrapper>
        <Card className='p-5'>
          <h2 className='text-2xl font-semibold'>My Lists</h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-11 gap-5'>
            {Array.isArray(listName) &&
              listName.map((item, index) => (
                <li
                  className='group col-span-1 grid-flow-row'
                  key={item._id}>
                  <div
                    className='border grid grid-cols-2 gap-1 h-[271px] rounded-xl hover:bg-gray-50 cursor-pointer'
                    onClick={() => handleClick(item._id)}></div>
                  <div className='flex justify-between mt-3'>
                    <Link to={`/lists/${item._id}`}>
                      <p className='group-hover:underline cursor-pointer text-sm font-semibold w-fit'>
                        {item.name}
                      </p>
                    </Link>
                    <Combobox
                      open={!!openMap[index]}
                      onOpenChange={() => handleOpenChange(index)}
                      onDelete={deleteList}
                      onRename={renameList}
                      id={item._id}
                      listName={item.name}
                    />
                  </div>
                </li>
              ))}
            <li>
              <PlusButtonList setOpenModal={setOpenModal} />
            </li>
          </ul>
        </Card>
        <ListsModal
          isOpen={openModal}
          onOpenChange={setOpenModal}
          onChange={(e) => setNewListName(e.target.value)}
          value={newListName}
          onSave={addItem}
        />
      </MainWrapper>
    </div>
  );
};
export default Lists;
