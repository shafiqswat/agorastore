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
import LoadingSkeleton from "../components/Skeleton";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, loading } = useContext(ProductContext);

  const product = products?.find((p) => p._id === productId);
  if (loading) {
    return <Container>{loading && <LoadingSkeleton count={10} />}</Container>;
  }

  return (
    <>
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
              <SimilarProduct />
            </section>
            <section>
              <CompareTable />
            </section>
          </Container>
          <div className='hidden lessMedium:grid grid-cols-2 gap-5 w-full p-5 fixed bottom-0 bg-white z-20 shadow-md'>
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
    </>
  );
};

export default ProductDetails;
