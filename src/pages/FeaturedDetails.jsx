/** @format */

import React from "react";
import Container from "../components/container";
import { Card } from "../components/ui/card";
import CustomButton from "../components/customButton";
import Header from "../components/Header";
import products from "../components/assets/products";
import ProductCard from "../components/Cards/productCard";

const FeaturedDetails = () => {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <div className='flex justify-between items-center p-6'>
            <div></div>
            <h2 className='text-2xl font-semibold'>Fun in the sun</h2>
            <CustomButton BtnText='Share collection' />
          </div>
          <div className='grid grid-cols-5 p-5 gap-7'>
            {products.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
              />
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
};

export default FeaturedDetails;
