/** @format */

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/Slider";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Container from "../components/layout/container";
import Reviews from "../components/constant/ProductsReview";
import { ProductContext } from "../components/Context/ProductContext";
import CompareTable from "../components/Tables/compareTable";
import Header from "../components/layout/Header";
import CustomButton from "../components/constant/customButton";
import CustomerReviews from "../components/constant/customerReviews";
import ReviewsModal from "../components/Modals/ReviewModal";
import SimilarProduct from "../components/SimilarProducts";
import SimilarProductsProvider from "../components/Context/SimilarProductsContext";

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
        <div className='flex flex-col lg:flex-row justify-between mt-20'>
          <div className='flex mb-4 lg:mb-0'>
            <p className='text-lg font-light mr-2 cursor-pointer'>
              {reviewsCount} customer reviews
            </p>
            <Reviews rating={product.rating} />
          </div>
          <CustomButton
            BtnText='Leave a review'
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <CustomerReviews />
          <CustomerReviews />
        </div>
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
      <div className='w-'>
        <CustomButton
          BtnText='Add to cart'
          className='fixed bottom-0 w-[95%] mx-auto left-4 block md:hidden sm:right-6 bg-lightbrown hover:bg-amber-700'
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
