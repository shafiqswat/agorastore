/** @format */

import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Card, CardHeader } from "../ui/card";
import { CartContext } from "../Context/CartContext";

const CartTable = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].count += 1;
    setCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count -= 1;
      setCart(newCart);
    } else {
      handleRemove(index);
    }
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  return (
    <Card className='shadow-none mb-5'>
      <CardHeader className='border-b'>
        <h2 className='text-2xl font-semibold'>Your cart</h2>
      </CardHeader>
      {cart.length < 1 ? (
        <div className='p-5'>Your Cart Is Empty</div>
      ) : (
        <Table>
          <TableBody>
            {cart.map((item, index) => (
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
                <TableCell>{item.description}</TableCell>
                <TableCell>$ {item.price}</TableCell>
                <TableCell>
                  <div className='flex gap-5'>
                    {item.count > 1 ? (
                      <div
                        className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                        onClick={() => handleDecrement(index)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-minus w-4 h-4'>
                          <path d='M5 12h14'></path>
                        </svg>
                      </div>
                    ) : (
                      <div
                        className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                        onClick={() => handleRemove(index)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-trash2 w-4 h-4'>
                          <path d='M3 6h18'></path>
                          <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
                          <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
                          <line
                            x1='10'
                            x2='10'
                            y1='11'
                            y2='17'></line>
                          <line
                            x1='14'
                            x2='14'
                            y1='11'
                            y2='17'></line>
                          <input type='' />
                        </svg>
                      </div>
                    )}
                    <input
                      type='text'
                      className='border rounded-sm h-10 w-12 text-center'
                      value={item.count}
                      readOnly
                    />
                    <div
                      className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                      onClick={() => handleIncrement(index)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-plus w-4 h-4'>
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
      )}
    </Card>
  );
};

export default CartTable;
