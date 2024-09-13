/** @format */

import { useContext, useState, useRef } from "react";
import CustomButton from "../constant/customButton";
import CreditCardInput from "../FormItems/CreditCardInput";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { PaymentContext } from "../Context/PaymentContext";

const PaymentModal = ({ isOpen, onOpenChange }) => {
  const { addPaymentMethod } = useContext(PaymentContext);
  const [paymentMethodId, setPaymentMethodId] = useState(null);

  const creditCardFormRef = useRef(null);

  const handlePaymentMethod = async (id) => {
    setPaymentMethodId(id);
    await addPaymentMethod({ paymentIntentId: id });
  };

  const handleAddPaymentClick = () => {
    if (creditCardFormRef.current) {
      creditCardFormRef.current.submit();
    }
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
        <CreditCardInput
          handlePaymentMethod={handlePaymentMethod}
          ref={creditCardFormRef}
        />
        <DialogFooter className='sm:justify-end'>
          <CustomButton
            BtnText='Add payment method'
            onClick={handleAddPaymentClick}
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
