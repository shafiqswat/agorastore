/** @format */

import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Card, CardHeader } from "../ui/card";
import { CartContext } from "../Context/CartContext";
import { MinusIcon, PlusIcon, TrashIcon } from "../constant/SvgIcons";

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
                        <MinusIcon />
                      </div>
                    ) : (
                      <div
                        className='w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-gray-100'
                        onClick={() => handleRemove(index)}>
                        <TrashIcon />
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
                      <PlusIcon />
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
