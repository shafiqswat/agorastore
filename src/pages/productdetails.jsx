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
import CustomerReviews from "../components/constant/customerReviews";
import ReviewsModal from "../components/Modals/ReviewModal";
import SimilarProduct from "../components/SimilarProducts";
import SimilarProductsProvider from "../components/Context/SimilarProductsContext";
import { ProductContext } from "../components/Context/ProductContext";

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
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 px-20 large:px-0'>
          <CustomerReviews
            reviewText='Great socks These socks fit well, are comfortable and the height is great. I love the rainbow unicorns and they support a fabulous cause.Lori W.'
            userName='shafiq'
          />
          <CustomerReviews reviewText="New Favorite Socks! These are my new favorite socks. They're very good quality, they don't slip down through the day, and they're soft without feeling too thin or delicate. Definitely get yourself a pair or 12!Elizabeth" />
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
