/** @format */

import CustomButton from "../components/common/CustomButton";
import { Dialog } from "../components/elements/Dialog";

const ConfirmPaymentModal = ({
  isModalOpen,
  subtotal,
  handleConfirmPayment,
  setModalOpen,
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setModalOpen(false)}>
      <div className='p-6 text-center'>
        <h2 className='text-lg font-semibold'>Confirm Your Payment</h2>
        <p>
          Are you sure you want to confirm the payment of ${subtotal.toFixed(2)}
          ?
        </p>
        <div className='flex justify-center gap-4 mt-6'>
          <CustomButton
            BtnText='Yes, Confirm'
            className='bg-green-500 text-white'
            onClick={handleConfirmPayment}
          />
          <CustomButton
            BtnText='Cancel'
            className='bg-red-500 text-white'
            onClick={() => setModalOpen(false)}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmPaymentModal;
