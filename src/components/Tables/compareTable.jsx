/** @format */

import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../elements/Table";
import CompareCard from "../cards/CompareCard";
import Reviews from "../common/ProductsReview";
import { CompareContext } from "../../context/CompareProductContext";
import Container from "../common/MainWrapper";
import LoadingSkeleton from "../Skeleton";

const CompareTable = () => {
  const { compareProduct, loading } = useContext(CompareContext);

  // Limit to 4 products for comparison
  const limitedCompareProduct = compareProduct?.slice(0, 4);

  // Render loading skeleton if data is loading
  if (loading) {
    return (
      <Container>
        <LoadingSkeleton count={5} />
      </Container>
    );
  }

  // Check if there are no products to compare
  if (!compareProduct || compareProduct.length === 0) {
    return (
      <>
        <h2 className='text-2xl font-semibold text-center mb-10 mt-32'>
          Compare products
        </h2>
        <p className='text-center text-lg font-Lexend mt-10'>
          Compare product not found for this product
        </p>
      </>
    );
  }

  // Reusable table cell generator
  const renderTableCells = (items, renderContent) =>
    items.map((item, i) => (
      <TableCell
        key={i}
        className='border-b border-gray-300 py-3'>
        {renderContent(item)}
      </TableCell>
    ));

  // Main component rendering
  return (
    <>
      <h2 className='text-2xl font-semibold text-center mb-10 mt-32'>
        Compare products
      </h2>
      {compareProduct.length === 0 && (
        <p className='text-center text-xl font-semibold mt-10'>
          Compare product not found for this product
        </p>
      )}
      <Table className='table-auto w-full border-collapse text-center'>
        <TableBody>
          {/* Product Card Row */}
          <TableRow>
            <TableHead className='border-b border-gray-300 text-left'></TableHead>
            {renderTableCells(limitedCompareProduct, (item) => (
              <CompareCard item={item} />
            ))}
          </TableRow>

          {/* Price Row */}
          <TableRow>
            <TableHead className='border-b border-gray-300'>Price</TableHead>
            {renderTableCells(
              limitedCompareProduct,
              (item) => `$${item.price.toFixed(2)}`
            )}
          </TableRow>

          {/* Brand Row */}
          <TableRow>
            <TableHead className='border-b border-gray-300'>Brand</TableHead>
            {renderTableCells(limitedCompareProduct, (item) => item.brand)}
          </TableRow>

          {/* Agora Score Row */}
          <TableRow>
            <TableHead className='border-b border-gray-300'>
              Agora score
            </TableHead>
            {renderTableCells(limitedCompareProduct, (item) => (
              <Reviews
                rating={item.rating.toFixed(2)}
                parentStyle='flex items-center justify-center'
              />
            ))}
          </TableRow>

          {/* Customer Rating Row */}
          <TableRow>
            <TableHead className='border-b border-gray-300'>
              Customer rating
            </TableHead>
            {renderTableCells(limitedCompareProduct, (item) => (
              <Reviews
                rating={item.agoraScore}
                parentStyle='flex items-center justify-center'
              />
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CompareTable;
