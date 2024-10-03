/** @format */

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/Slider";
import CompareTable from "../components/tables/CompareTable";
import Header from "../components/layout/Header";
import CustomButton from "../components/common/CustomButton";
import SimilarProduct from "../components/SimilarProducts";
import SimilarProductsProvider from "../context/SimilarProductsContext";
import { ProductContext } from "../context/ProductContext";
import Review from "../components/Review";
import ReviewProvider from "../context/ReviewContext";
import ReviewForm from "../components/formItems/ReviewForm";
import CompareProductProvider from "../context/CompareProductContext";
import LoadingSkeleton from "../components/Skeleton";
import ProductDetailsCard from "../components/cards/ProductDetailsCard";
import MainWrapper from "../components/common/MainWrapper";
import { CartContext } from "../context/CartContext"; // Import CartContext
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { toast } from "sonner"; // Assuming you're using sonner for toast notifications
import Modal from "../modals/SigninModal"; // Adjust this import based on your modal implementation

// Sub-component for rendering the product reviews and form
const ProductReviewsSection = ({ productId, product }) => {
  return (
    <ReviewProvider productId={productId}>
      <ReviewForm product={product} />
      <Review />
    </ReviewProvider>
  );
};

// Sub-component for rendering the similar products section
const SimilarProductsSection = () => (
  <section>
    <h2 className='text-2xl font-semibold text-center my-10'>
      Similar products
    </h2>
    <SimilarProduct />
  </section>
);

// Sub-component for product details content
const ProductDetailsContent = ({ product }) => (
  <div className='grid lg:gap-10 lg:grid-cols-2 overflow-hidden'>
    <ProductSlider productImages={product.images || []} />
    <ProductDetailsCard product={product} />
  </div>
);

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, loading } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext); // Access CartContext
  const { isAuthenticated } = useContext(AuthContext); // Access AuthContext
  const [showSigninModal, setShowSigninModal] = useState(false);

  // Find the specific product based on productId
  const product = products?.find((p) => p._id === productId);

  // Render loading skeleton if loading is true
  if (loading) {
    return (
      <MainWrapper>
        <LoadingSkeleton count={10} />
      </MainWrapper>
    );
  }

  const handleCart = () => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      setShowSigninModal(true); // Show the SigninModal if not authenticated
      return;
    }

    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].count += 1; // Increase count if already in cart
      setCart(newCart);
    } else {
      const updatedCart = [...cart, { ...product, count: 1 }]; // Add new product
      setCart(updatedCart);
    }

    toast("Product added to cart", {
      icon: <i className='fa-solid fa-circle-check'></i>,
      description: product.description,
    });
  };

  return (
    <>
      <SimilarProductsProvider productId={productId}>
        <CompareProductProvider productId={productId}>
          <Header />
          <MainWrapper>
            <ProductDetailsContent product={product} />
            <ProductReviewsSection
              productId={productId}
              product={product}
            />
            <SimilarProductsSection />
            <section>
              <CompareTable />
            </section>
            {/* Bottom Action Bar */}
            <div className='hidden lessMedium:grid grid-cols-2 gap-5 w-full p-5 fixed bottom-0 bg-white z-20 shadow-md'>
              <CustomButton
                onClick={handleCart} // Add onClick to handleCart
                BtnText='Add to cart'
                className='bg-lightbrown hover:bg-amber-700 p-5'
              />
              <CustomButton
                BtnText='Visit store'
                className='p-5'
              />
            </div>
          </MainWrapper>
        </CompareProductProvider>
      </SimilarProductsProvider>

      {/* Sign In Modal */}
      <Modal
        isOpen={showSigninModal}
        setIsOpen={setShowSigninModal}
      />
    </>
  );
};

export default ProductDetails;
