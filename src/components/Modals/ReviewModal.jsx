/** @format */

import React from "react";
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

const ReviewsModal = ({ isOpen, onOpenChange }) => {
  return (
    <form>
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
          <Textarea placeholder='Type your message here.' />
          <DialogFooter className='sm:justify-end'>
            <CustomButton BtnText='Submit review' />
            <DialogClose asChild>
              <Button
                type='button'
                variant='secondary'
                className='rounded-full'>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default ReviewsModal;
