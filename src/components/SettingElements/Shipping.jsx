/** @format */

import React from "react";
import CustomButton from "../constant/customButton";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

const Shipping = () => {
  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Shipping addresses</h2>
      <p className='text-sm text-neutral-500 mb-5'>
        Manage your shipping addresses below.
      </p>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead className='grid grid-flow-col border-b'>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Address Line two</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip Code</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Actions</TableCell>
            </TableHead>
          </TableRow>
        </TableBody>
      </Table>
      <p className='text-center text-sm text-neutral-500 mt-5'>
        No shipping addresses available
      </p>
      <CustomButton
        BtnText='Add new address'
        className='w-fit my-3'
      />
    </div>
  );
};

export default Shipping;
