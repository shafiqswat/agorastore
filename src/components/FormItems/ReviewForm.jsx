/** @format */

/** @format */

import React, { useContext, useState } from "react";
import HoverCardComponent from "../Cards/hoverCard";
import Reviews from "../constant/ProductsReview";
import CustomButton from "../constant/customButton";
import ReviewsModal from "../Modals/ReviewModal";
import { ReviewContext } from "../Context/ReviewContext";

const ReviewForm = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { reviewData } = useContext(ReviewContext);
  const reviewsCount = reviewData.length;
  const averageReview = reviewData
    .reduce((acc, current, _, arr) => {
      return acc + current.rating / arr.length;
    }, 0)
    .toFixed(2);
  console.log(reviewData, "HOW MUCH REVIEWS THE PRODUCT TAKES");
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
              rating={product.rating}
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
          onClick={() => setShowModal(true)}
        />
        <ReviewsModal
          isOpen={showModal}
          onOpenChange={setShowModal}
        />
      </div>
    </div>
  );
};

export default ReviewForm;
