/** @format */

import React, { useState, useContext } from "react";
import CustomButton from "../constant/customButton";
import UserReview from "../constant/userReview";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { PostReviewContext } from "../Context/PostReviewContext";

const ReviewsModal = ({ isOpen, onOpenChange }) => {
  const [reviewText, setReviewText] = useState("");
  const { handlePostReview, loading, error } = useContext(PostReviewContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handlePostReview({ comment: reviewText });
      setReviewText("");
      onOpenChange(false);
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Dialog
        open={isOpen}
        onOpenChange={onOpenChange}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className='w-[512px]'>
          <DialogHeader>
            <DialogTitle>Leave a review</DialogTitle>
            <DialogDescription className='flex justify-center'>
              <UserReview />
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder='Type your review here.'
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <DialogFooter className='sm:justify-end'>
            <CustomButton
              BtnText='Submit review'
              type='submit'
              disabled={loading}
              className='my-2'
              onClick={() => onOpenChange(false)}
            />
            <DialogClose asChild>
              <Button
                type='button'
                variant='secondary'
                className='rounded-full my-2'>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
          {error && <p className='text-red-500'>Error: {error}</p>}
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default ReviewsModal;
