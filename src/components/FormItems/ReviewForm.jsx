/** @format */

/** @format */

import React, { useContext, useState } from "react";
import HoverCardComponent from "../cards/HoverCard";
import Reviews from "../common/ProductsReview";
import CustomButton from "../common/CustomButton";
import ReviewsModal from "../../modals/ReviewModal";
import { ReviewContext } from "../../context/ReviewContext";
import Modal from "../../modals/SigninModal";
import { AuthContext } from "../../context/AuthContext";

const ReviewForm = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const { reviews } = useContext(ReviewContext);
  const reviewsCount = reviews?.length;
  const averageReview = reviews
    ?.reduce((acc, current, _, arr) => {
      return acc + current.rating / arr?.length;
    }, 0)
    ?.toFixed(2);
  console.log(reviews, "HOW MUCH REVIEWS THE PRODUCT TAKES");
  const handleModals = () => {
    if (isAuthenticated) {
      setShowModal(true);
    } else {
      setShowSigninModal(true);
    }
  };
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mt-20 ps-20 pe-28 large:px-0 '>
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
              rating={averageReview}
              showRating={false}
            />
            <span className='text-[12px] ms-2 text-neutral-500 cursor-pointer'>
              {averageReview}
            </span>
          </div>
        </HoverCardComponent>
      </div>
      <div>
        <CustomButton
          BtnText='Leave a review'
          onClick={handleModals}
        />
        <ReviewsModal
          isOpen={showModal}
          onOpenChange={setShowModal}
          productId={product._id}
        />
        <Modal
          isOpen={showSigninModal}
          setIsOpen={setShowSigninModal}
        />
      </div>
    </div>
  );
};

export default ReviewForm;
