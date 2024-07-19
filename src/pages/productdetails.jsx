/** @format */

import React from "react";
import ProductSlider from "../components/Slider";
import Header from "../components/Header";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Container from "../components/container";
import Reviews from "../components/reviews";
import CustomButton from "../components/customButton";
import SimilarProducts from "../components/assets/SimilarProudct";
import ProductCard from "../components/Cards/productCard";
import CompareTable from "../components/compareTable";

function ProductDetails() {
  return (
    <>
      <Header />
      <Container>
        <div className='grid lg:gap-10 lg:grid-cols-2 overflow-hidden'>
          <ProductSlider />
          <ProductDetailsCard />
        </div>
        <div className='flex flex-col lg:flex-row justify-between my-20'>
          <div className='flex mb-4 lg:mb-0'>
            <p className='text-lg font-light mr-2 cursor-pointer'>
              0 customer reviews
            </p>
            <Reviews rating='0.00' />
          </div>
          <CustomButton BtnText='Leave a review ' />
        </div>
        <section>
          <h2 className='text-2xl font-semibold text-center my-10'>
            Similar products
          </h2>
          <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
            {SimilarProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-2xl font-semibold text-center mb-10 mt-32'>
            Compare products
          </h2>
          <CompareTable />
        </section>
      </Container>
    </>
  );
}

export default ProductDetails;
