/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/Slider";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Container from "../components/layout/container";
import CompareTable from "../components/Tables/compareTable";
import Header from "../components/layout/Header";
import CustomButton from "../components/constant/customButton";
import SimilarProduct from "../components/SimilarProducts";
import SimilarProductsProvider from "../components/Context/SimilarProductsContext";
import { ProductContext } from "../components/Context/ProductContext";
import Review from "../components/Review";
import ReviewProvider from "../components/Context/ReviewContext";
import ReviewForm from "../components/FormItems/ReviewForm";
import CompareProductProvider from "../components/Context/CompareProductContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <SimilarProductsProvider productId={productId}>
      <CompareProductProvider productId={productId}>
        <Header />
        <Container>
          <div className='grid lg:gap-10 lg:grid-cols-2 overflow-hidden'>
            <ProductSlider productImages={product.images || []} />
            <ProductDetailsCard product={product} />
          </div>
          <ReviewProvider productId={productId}>
            <ReviewForm product={product} />
            <Review />
          </ReviewProvider>
          <section>
            <h2 className='text-2xl font-semibold text-center my-10'>
              Similar products
            </h2>
            <div className='grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4'>
              <SimilarProduct />
            </div>
          </section>
          <section>
            <CompareTable />
          </section>
        </Container>
        <div className='hidden lessMedium:grid  grid-cols-2 gap-5 w-full p-5 fixed bottom-0 bg-white z-20 shadow-md w-100'>
          <CustomButton
            BtnText='Add to cart'
            className='bg-lightbrown hover:bg-amber-700 p-5'
          />
          <CustomButton
            BtnText='Visit store'
            className='p-5'
          />
        </div>
      </CompareProductProvider>
    </SimilarProductsProvider>
  );
};

export default ProductDetails;
