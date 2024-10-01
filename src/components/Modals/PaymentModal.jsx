/** @format */
import { useContext, useEffect, useRef } from "react";
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
  const { addPaymentMethod, paymentMethodId } = useContext(PaymentContext);
  const creditCardFormRef = useRef(null);

  const handlePaymentMethod = async ({ paymentMethodId }) => {
    await addPaymentMethod({ paymentMethodId }); // Pass the paymentMethodId
  };

  const handleAddPaymentClick = () => {
    if (creditCardFormRef.current) {
      creditCardFormRef.current.submit();
    }
  };

  // Show success message or close modal after adding the payment method
  useEffect(() => {
    if (paymentMethodId) {
      alert("Payment method added successfully!");
      onOpenChange(false); // Close the modal on success
    }
  }, [paymentMethodId, onOpenChange]);

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
