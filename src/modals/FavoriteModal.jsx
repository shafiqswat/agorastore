/** @format */

import { useContext, useState } from "react";
import { Button } from "../components/elements/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/elements/Dialog";
import ListsModal from "./ListsModal";
import { ListContext } from "../context/ListContext";
import { Circle, CircleFilled } from "../assets/SvgIcons";
import PlusButtonList from "../components/common/PlusButtonList";

const FavoriteModal = ({
  isOpen,
  onOpenChange,
  ModalHeading = "Create a new list",
  ModalDetails = "Fill in the details to create a new list.",
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { listName, createList } = useContext(ListContext);
  const [newListName, setNewListName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const addItem = () => {
    if (newListName.trim() === "") return;
    createList(newListName);
    setNewListName("");
    setOpenModal(false);
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
          {listName.map((item, index) => (
            <ul key={index}>
              <li
                className='flex justify-between border p-2 ps-5 my-2 rounded-full cursor-pointer hover:bg-lightgray'
                onClick={() => handleClick(item)}>
                <p className='font-medium text-sm'>{item.name}</p>{" "}
                <div>
                  {selectedItems.includes(item) ? <CircleFilled /> : <Circle />}
                </div>
              </li>
            </ul>
          ))}
          <PlusButtonList setOpenModal={setOpenModal} />
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
          isOpen={openModal}
          onOpenChange={setOpenModal}
          onChange={(e) => setNewListName(e.target.value)}
          value={newListName}
          onSave={addItem}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FavoriteModal;
