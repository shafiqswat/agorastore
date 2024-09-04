/** @format */

import React, { useContext } from "react";
import ProductCard from "../components/Cards/productCard";
import Container from "../components/layout/container";
import { ProductContext } from "../components/Context/ProductContext";
import { FeaturedContext } from "../components/Context/FeaturedContext";
import FeaturedCard from "../components/Cards/featuredCard";
import Header from "../components/layout/Header";
import CustomButton from "../components/constant/customButton";
import LoadingSkeleton from "../components/Skeleton";

function Home() {
  const { products, loading: productLoading } = useContext(ProductContext);
  const { featuredData, loading: featuredLoading } =
    useContext(FeaturedContext);

  return (
    <>
      <Header />
      <Container>
        {productLoading ? (
          <LoadingSkeleton count={10} />
        ) : (
          <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
              />
            ))}
          </div>
        )}

        <div className='flex justify-between items-center my-32'>
          <h3 className='font-sans font-semibold text-2xl'>
            Featured collections
          </h3>
          <CustomButton BtnText='More Collections' />
        </div>

        {featuredLoading ? (
          <LoadingSkeleton count={8} />
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36'>
            {featuredData.map((item, index) => (
              <FeaturedCard
                key={index}
                item={item}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
