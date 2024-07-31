/** @format */
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import { RemoveIcon } from "./constant/SvgIcons";
import ListsModal from "./Modals/ListsModal";

export function Combobox({
  open,
  onOpenChange,
  onRename,
  onDelete,
  id,
  listName,
}) {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [newName, setNewName] = useState(listName);

  const handleRename = () => {
    onRename(id, newName);
    setShowRenameModal(false);
  };

  return (
    <>
      <Popover
        open={open}
        onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <div className='bg-lightgray p-1 rounded-lg cursor-pointer'>
            <RemoveIcon />
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-[130px] p-0'>
          <div>
            <h3 className='text-sm font-semibold mb-2 border-b p-3 w-full'>
              Actions
            </h3>
            <ul className='space-y-1'>
              <li
                className='flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded'
                onClick={() => setShowRenameModal(true)}>
                Rename
              </li>
              <li
                className='flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded'
                onClick={() => {
                  onOpenChange();
                  onDelete(id);
                }}>
                Delete
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>

      <ListsModal
        isOpen={showRenameModal}
        onOpenChange={setShowRenameModal}
        ModalHeading='Rename List'
        ModalDetails='Enter a new name for the list.'
        BtnText='Rename'
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        onSave={handleRename}
      />
    </>
  );
}
