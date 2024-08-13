/** @format */

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/Slider";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Container from "../components/layout/container";
import Reviews from "../components/constant/ProductsReview";
import CompareTable from "../components/Tables/compareTable";
import Header from "../components/layout/Header";
import CustomButton from "../components/constant/customButton";
import ReviewsModal from "../components/Modals/ReviewModal";
import SimilarProduct from "../components/SimilarProducts";
import SimilarProductsProvider from "../components/Context/SimilarProductsContext";
import { ProductContext } from "../components/Context/ProductContext";
import HoverCardComponent from "../components/Cards/hoverCard";
import Review from "../components/Review";
import ReviewProvider from "../components/Context/ReviewContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p._id === productId);
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const reviewsCount = product.reviews ? product.reviews.length : 0;

  return (
    <SimilarProductsProvider productId={productId}>
      <Header />
      <Container>
        <div className='grid lg:gap-10 lg:grid-cols-2 overflow-hidden'>
          <ProductSlider productImages={product.images || []} />
          <ProductDetailsCard product={product} />
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-20 px-20 large:px-0'>
          <div className='flex items-center  mb-4 lg:mb-0'>
            <HoverCardComponent text='This is the number of unique customer reviews for this product. We automatically check all reviews for relevancy and accuracy.'>
              <p className='text-lg font-light mr-2 cursor-pointer'>
                {reviewsCount} customer reviews
              </p>
            </HoverCardComponent>
            <HoverCardComponent
              className='w-fit'
              text='This is the average customer rating out of 5.'>
              <div className='inline-flex items-center'>
                <Reviews
                  className='cursor-pointer'
                  rating={product.rating}
                  showRating={false}
                />
                <span className='text-[12px] ms-2 text-neutral-500 cursor-pointer'>
                  4.60
                </span>
              </div>
            </HoverCardComponent>
          </div>
          <CustomButton
            BtnText='Leave a review'
            onClick={() => setShowModal(true)}
          />
        </div>
        <ReviewProvider productId={productId}>
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
          <h2 className='text-2xl font-semibold text-center mb-10 mt-32'>
            Compare products
          </h2>
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
      <ReviewsModal
        isOpen={showModal}
        onOpenChange={setShowModal}
      />
    </SimilarProductsProvider>
  );
};

export default ProductDetails;
