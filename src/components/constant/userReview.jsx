/** @format */

import React from "react";
import { StarIcon } from "./SvgIcons";

function UserReview({ rating, onRatingChange, className, parentStyle }) {
  const handleStarClick = (newRating) => {
    onRatingChange(newRating); // Call the function passed from the parent to update the rating
  };

  return (
    <div className={`flex items-center gap-1 my-1.5 ${parentStyle}`}>
      <div className='flex items-center'>
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            filled={index < rating}
            onClick={() => handleStarClick(index + 1)} // Update rating when star is clicked
            className={className}
          />
        ))}
      </div>
      <button
        className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 rounded-full text-neutral-400 px-2 py-0 h-4'
        style={{ marginTop: "2px" }}></button>
    </div>
  );
}

export default UserReview;
