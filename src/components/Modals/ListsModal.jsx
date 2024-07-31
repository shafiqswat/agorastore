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

const ListsModal = ({
  isOpen,
  onOpenChange,
  onChange,
  value,
  onSave,
  ModalHeading = "Create a new list",
  ModalDetails = "Fill in the details to create a new list.",
  BtnText = "Create list",
}) => {
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
            BtnText={BtnText}
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
