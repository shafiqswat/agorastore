/** @format */

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Card, CardHeader, CardContent } from "../ui/card"; // Importing the necessary components

const CartTable = () => {
  const [count, setCount] = useState(0);
  const cartItems = [
    {
      id: 1,
      price: "$10",
      image: "/images/compare1.webp",
      para: "Conseal The Deal Long-Wear Full-Coverage Foundation",
    },
    {
      id: 2,
      price: "$10",
      image: "/images/compare1.webp",
      para: "Kyrie Puff Sleeve Short Dress | White Multi",
    },
    {
      id: 3,
      price: "$10",
      image: "/images/compare1.webp",
      para: "Conseal",
    },
  ];

  return (
    <Card className='shadow-none mb-5'>
      <CardHeader className='border-b'>
        <h2 className='text-2xl font-semibold'>Your cart</h2>
      </CardHeader>
      <Table>
        <TableBody>
          {cartItems.map((item, index) => (
            <TableRow
              key={index}
              className='border-b'>
              <TableCell className='px-8 py-5'>
                <img
                  src={item.image}
                  alt={item.para}
                  className='max-w-24 max-h-24 rounded-lg'
                />
              </TableCell>
              <TableCell>{item.para}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <div className='flex gap-5'>
                  <div
                    className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                    onClick={() => setCount(count - 1)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='lucide lucide-minus w-4 h-4'>
                      <path d='M5 12h14'></path>
                    </svg>
                  </div>
                  <input
                    type='text'
                    onChange={(e) => setCount(e.target.value)}
                    className='border rounded-sm h-10 w-12 text-center'
                    value={count}
                  />
                  <div
                    className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                    onClick={() => setCount(count + 1)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='lucide lucide-plus w-4 h-4'>
                      <path d='M5 12h14'></path>
                      <path d='M12 5v14'></path>
                    </svg>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CartTable;
