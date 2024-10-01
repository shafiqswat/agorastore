/** @format */

import React, { useContext, useState } from "react";
import { usePostReview } from "../Context/PostReviewContext";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import UserReview from "../constant/userReview";
import { AuthContext } from "../Context/AuthContext";
import { ReviewContext } from "../Context/ReviewContext";

const ReviewsModal = ({ isOpen, onOpenChange, productId }) => {
  const { loading, error, postReview } = usePostReview();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const { handleNewReview } = useContext(ReviewContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userId = user._id; // Correctly obtain user ID from context
    await postReview(productId, rating, reviewText);
    setReviewText("");
    handleNewReview();
    setRating(0);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='w-[512px]'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Leave a review</DialogTitle>
            <DialogDescription className='flex justify-center'>
              <UserReview
                rating={rating}
                onRatingChange={setRating}
              />
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder='Type your review here.'
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          {error && <p className='text-red-500'>{error}</p>}{" "}
          {/* Show error message */}
          <DialogFooter className='sm:justify-end'>
            <Button
              className='rounded-full my-2'
              type='submit'
              disabled={loading}>
              {loading ? "Submitting..." : "Submit review"}
            </Button>
            <DialogClose asChild>
              <Button
                type='button'
                variant='secondary'
                className='rounded-full my-2'>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewsModal;
