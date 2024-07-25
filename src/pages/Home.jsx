/** @format */

import React, { useContext } from "react";
import Header from "../components/Header";
import ProductCard from "../components/Cards/productCard";
import CustomButton from "../components/customButton";
// import FeaturedCard from "../components/Cards/featuredCard";
import Container from "../components/container";
import { ProductContext } from "../components/Context/ProductContext";
import { FeaturedContext } from "../components/Context/FeaturedContext";
import FeaturedCard from "../components/Cards/featuredCard";

function Home() {
  const { products } = useContext(ProductContext);
  const { featuredData } = useContext(FeaturedContext);
  return (
    <>
      <Header />
      <Container>
        <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>
        <div className='flex justify-between items-center my-32'>
          <h3 className='font-sans font-semibold text-2xl'>
            Featured collections
          </h3>
          <CustomButton BtnText='More Collections' />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36'>
          {featuredData.map((item, index) => (
            <FeaturedCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
