/** @format */

import { useContext, useState } from "react";
import NewList from "../constant/NewList";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ListsModal from "./ListsModal";
import { ListContext } from "../Context/ListContext";
import { Circle, CircleFilled } from "../constant/SvgIcons";

const FavoriteModal = ({
  isOpen,
  onOpenChange,
  ModalHeading = "Create a new list",
  ModalDetails = "Fill in the details to create a new list.",
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { items, listName, setListName, setItems } = useContext(ListContext);
  const generateId = () => "_" + Math.random().toString(36).substr(2, 9);
  const addItem = () => {
    if (listName.trim() === "") return;
    const newItem = { id: generateId(), listName };
    setItems([...items, newItem]);
    setListName("");
    setShowModal(false);
  };

  const handleClick = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>{ModalHeading}</DialogTitle>
          <DialogDescription>{ModalDetails}</DialogDescription>
        </DialogHeader>
        <div>
          {items.map((item, index) => (
            <ul key={index}>
              <li
                className='flex justify-between border p-2 ps-5 my-2 rounded-full cursor-pointer hover:bg-lightgray'
                onClick={() => handleClick(item)}>
                <p className='font-medium text-sm'>{item.listName}</p>
                <div>
                  {selectedItems.includes(item) ? <CircleFilled /> : <Circle />}
                </div>
              </li>
            </ul>
          ))}
          <NewList setOpenModal={setShowModal} />
        </div>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
              className='rounded-full'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
        <ListsModal
          isOpen={showModal}
          onOpenChange={setShowModal}
          onChange={(e) => setListName(e.target.value)}
          value={listName}
          onSave={addItem}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FavoriteModal;
