/** @format */
import { useContext, useEffect, useRef, useState } from "react";
import CustomButton from "../components/common/CustomButton";
import CreditCardInput from "../components/formItems/CreditCardInput";
import { Button } from "../components/elements/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../components/elements/Dialog";
import { PaymentContext } from "../context/PaymentContext";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ isOpen, onOpenChange }) => {
  const { addPaymentMethod, paymentMethodId, loading } =
    useContext(PaymentContext);
  const creditCardFormRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePaymentMethod = async ({ paymentMethodId }) => {
    setError(null);
    try {
      await addPaymentMethod({ paymentMethodId });
      onOpenChange(false);
    } catch (error) {
      setError("Failed to add payment method. Please try again.");
    }
  };

  const handleAddPaymentClick = () => {
    if (creditCardFormRef.current) {
      creditCardFormRef.current.submit();
    }
  };

  useEffect(() => {
    if (paymentMethodId) {
      onOpenChange(false);
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
        {error && <div style={{ color: "red" }}>{error}</div>}{" "}
        {/* Display errors if any */}
        <CreditCardInput
          handlePaymentMethod={handlePaymentMethod}
          ref={creditCardFormRef}
        />
        <DialogFooter className='sm:justify-end'>
          <CustomButton
            BtnText={loading ? "Adding..." : "Add payment method"}
            onClick={handleAddPaymentClick}
            disabled={loading}
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
