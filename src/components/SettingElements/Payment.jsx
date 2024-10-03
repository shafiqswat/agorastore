/** @format */
import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../elements/Table";
import PaymentModal from "../../modals/PaymentModal";
import { PaymentContext } from "../../context/PaymentContext";

// PaymentTableHeader Component
const PaymentTableHeader = () => (
  <TableRow>
    <TableHead>Brand</TableHead>
    <TableHead>Last 4 Digits</TableHead>
    <TableHead>Expiry</TableHead>
    <TableHead>Actions</TableHead>
  </TableRow>
);

// PaymentRow Component
const PaymentRow = ({ method, onDelete }) => (
  <TableRow key={method.id}>
    <TableCell>{method.card.brand}</TableCell>
    <TableCell>{method.card.last4}</TableCell>
    <TableCell>{`${method.card.exp_month}/${method.card.exp_year}`}</TableCell>
    <TableCell>
      <button
        className='text-red-500'
        onClick={() => onDelete(method.id)}>
        Delete
      </button>
    </TableCell>
  </TableRow>
);

// Payment Component
const Payment = () => {
  const {
    getPaymentMethods,
    deletePaymentMethod,
    paymentMethods,
    loading,
    error,
  } = useContext(PaymentContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPaymentMethods();
  }, [getPaymentMethods]);

  if (loading) {
    return (
      <p className='text-center text-xl font-Lexend mt-3'>
        Loading payment methods...
      </p>
    );
  }

  if (error) {
    return <p className='text-red-500'>Error: {error}</p>;
  }

  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Payment Methods</h2>
      <p className='text-sm text-neutral-500 mb-5'>
        Manage your payment methods below.
      </p>
      <Table className='w-full table-auto'>
        <TableBody>
          <PaymentTableHeader />
          {paymentMethods.length > 0 ? (
            paymentMethods.map((method) => (
              <PaymentRow
                key={method.id}
                method={method}
                onDelete={deletePaymentMethod}
              />
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className='text-center'>
                No payment methods available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <CustomButton
        BtnText='Add Payment Method'
        className='w-fit my-3'
        onClick={() => setOpenModal(true)}
      />
      <PaymentModal
        isOpen={openModal}
        onOpenChange={setOpenModal}
      />
    </div>
  );
};

export default Payment;
