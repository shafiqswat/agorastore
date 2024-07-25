/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FeaturedContext } from "../components/Context/FeaturedContext";
import Header from "../components/Header";
import Container from "../components/container";
import { Card } from "../components/ui/card";
import CustomButton from "../components/customButton";
import ProductCard from "../components/Cards/productCard";
import products from "../components/assets/products";

function Collections() {
  const { featuredId } = useParams();
  const NumericId = Number(featuredId);
  const { featuredData, loading, error } = useContext(FeaturedContext);

  console.log("featuredId:", featuredId);
  console.log("NumericId:", NumericId);
  console.log("featuredData:", featuredData);
  console.log("products:", products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = featuredData.find((p) => p.id === NumericId);
  console.log("product:", product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <div className='flex justify-between items-center p-6'>
            <div>{product.title}</div>
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
}

export default Collections;
