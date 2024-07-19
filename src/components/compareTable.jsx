/** @format */

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../components/ui/table";
import items from "./assets/compareProducts";
import CompareCard from "./Cards/compareCard";
import Reviews from "./reviews";

const CompareTable = () => {
  return (
    <Table className='table-auto w-full border-collapse text-center'>
      <TableBody>
        <TableRow>
          <TableHead className='border-b border-gray-300 text-left'></TableHead>
          {items.map((item, i) => (
            <TableCell
              key={i}
              className='border-b border-gray-300'>
              <CompareCard item={item} />
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className='border-b border-gray-300'>Price</TableHead>
          {items.map((item, i) => (
            <TableCell
              key={i}
              className='border-b border-gray-300 py-3'>
              {item.price}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className='border-b border-gray-300 py-3'>Brand</TableHead>
          {items.map((item, i) => (
            <TableCell
              key={i}
              className='border-b border-gray-300 py-3'>
              {item.brand}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className='border-b border-gray-300'>
            Agora score
          </TableHead>
          {items.map((item, i) => (
            <TableCell
              key={i}
              className='border-b border-gray-300 py-3'>
              <Reviews
                rating={item.agoraScore}
                style='flex items-center justify-center'
              />
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead>Customer rating</TableHead>
          {items.map((item, i) => (
            <TableCell
              key={i}
              className='py-4'>
              <Reviews
                rating={item.customerRating}
                style='flex items-center justify-center'
              />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompareTable;
