/** @format */

import { GoogleIcon } from "../constant/SvgIcons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Modal = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-[462px]'>
        <DialogHeader>
          <DialogTitle>Welcome to Agora</DialogTitle>
          <DialogDescription>
            Save and purchase your favorite products. We provide 24/7 support to
            all customers. By creating an account, you agree to our terms and
            privacy policy.
          </DialogDescription>
        </DialogHeader>
        <div className='w-72 h-9 border mx-auto grid grid-cols-4 items-center rounded-sm cursor-pointer hover:bg-customblue'>
          <GoogleIcon />
          <span className='col-span-3 font-sans text-sm font-medium'>
            Sign in with Google
          </span>
        </div>
        <DialogFooter>
          <button
            className='bg-lightgray px-4 py-2 rounded-3xl font-sans text-sm font-medium'
            onClick={() => onOpenChange(false)}>
            Cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
