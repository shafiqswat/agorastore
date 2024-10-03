/** @format */

import CustomButton from "../components/common/CustomButton";
import LabelComponent from "../components/formItems/Label";
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
import { Input } from "../components/elements/Input";
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
          <Input
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
