/** @format */

import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import CompareCard from "../Cards/compareCard";
import Reviews from "../constant/ProductsReview";
import { CompareContext } from "../Context/CompareProductContext";
import Container from "../layout/container";
import LoadingSkeleton from "../Skeleton";

const CompareTable = () => {
  const { compareProduct, loading } = useContext(CompareContext);

  const limitedCompareProduct = compareProduct.slice(0, 4);

  return (
    <>
      <>
        {loading && (
          <Container>
            <LoadingSkeleton count={5} />
          </Container>
        )}
      </>
      <h2 className='text-2xl font-semibold text-center mb-10 mt-32'>
        Compare products
      </h2>
      <Table className='table-auto w-full border-collapse text-center'>
        <TableBody>
          <TableRow>
            <TableHead className='border-b border-gray-300 text-left'></TableHead>
            {limitedCompareProduct.map((item, i) => (
              <TableCell
                key={i}
                className='border-b border-gray-300'>
                <CompareCard item={item} />
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableHead className='border-b border-gray-300'>Price</TableHead>
            {limitedCompareProduct.map((item, i) => (
              <TableCell
                key={i}
                className='border-b border-gray-300 py-3'>
                ${item.price.toFixed(2)}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableHead className='border-b border-gray-300 py-3'>
              Brand
            </TableHead>
            {limitedCompareProduct.map((item, i) => (
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
            {limitedCompareProduct.map((item, i) => (
              <TableCell
                key={i}
                className='border-b border-gray-300 py-3'>
                <Reviews
                  rating={item.rating.toFixed(2)}
                  parentStyle='flex items-center justify-center'
                />
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableHead>Customer rating</TableHead>
            {limitedCompareProduct.map((item, i) => (
              <TableCell
                key={i}
                className='py-4'>
                <Reviews
                  rating={item.agoraScore}
                  parentStyle='flex items-center justify-center'
                />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CompareTable;
