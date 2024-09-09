/** @format */

import CustomButton from "../constant/customButton";
import CreditCardInput from "../FormItems/CreditCardInput";
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
import { useContext } from "react";
import { PaymentContext } from "../Context/PaymentContext";

const PaymentModal = ({ isOpen, onOpenChange }) => {
  const { addPaymentMethod } = useContext(PaymentContext);

  const handleAddPaymentMethod = async (paymentMethodDetails) => {
    await addPaymentMethod(paymentMethodDetails);
    // Add any additional logic for handling the payment method
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add a new payment method</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new payment method
          </DialogDescription>
        </DialogHeader>
        <CreditCardInput />
        <DialogFooter className='sm:justify-end'>
          <CustomButton
            BtnText='Add payment method'
            onClick={handleAddPaymentMethod}
          />
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
              className='rounded-full'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
