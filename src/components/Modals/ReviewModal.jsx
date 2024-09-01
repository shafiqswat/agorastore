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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productId = "669240a250c87789853e0c2f";
  const userId = "6698b737b26955d47b65d58f";
  const rating = 3.3333;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          userId,
          rating,
          comment: reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post review");
      }

      const data = await response.json();
      console.log("Review posted successfully:", data);

      setReviewText("");
      onOpenChange(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
