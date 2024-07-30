/** @format */

import CustomButton from "../constant/customButton";
import InputComponent from "../FormItems/Input";
import LabelComponent from "../FormItems/label";
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

const ListsModal = ({ isOpen, onOpenChange, onChange, value, onSave }) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Create a new list</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new list.
          </DialogDescription>
        </DialogHeader>
        <div>
          <LabelComponent text='List name' />
          <InputComponent
            placeholder='Enter list Name'
            className='min-w-full'
            onChange={onChange}
            value={value}
          />
        </div>
        <DialogFooter className='sm:justify-end'>
          <CustomButton
            BtnText='Create list'
            onClick={onSave}
          />
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
              className='rounded-full'>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ListsModal;
