/** @format */

import React from "react";
import CustomButton from "../constant/customButton";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

const Payment = () => {
  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Payment methods</h2>
      <p className='text-sm text-neutral-500 mb-5'>
        Manage your payment methods below.
      </p>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead className='grid grid-flow-col border-b'>
              <TableCell>Brand</TableCell>
              <TableCell>Last 4 Digits</TableCell>
              <TableCell> Expiry</TableCell>
              <TableCell>Actions</TableCell>
            </TableHead>
          </TableRow>
        </TableBody>
      </Table>
      <p className='text-center text-sm text-neutral-500 mt-5'>
        No payment methods available
      </p>
      <CustomButton
        BtnText='Add payment method'
        className='w-fit my-3'
      />
    </div>
  );
};

export default Payment;
