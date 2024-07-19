/** @format */

import React from "react";

function Reviews({ rating, className, style }) {
  return (
    <div className={`flex items-center gap-1 my-1.5 ${style}`}>
      <div className='flex items-center'>
        {Array.from({ length: 5 }, (_, index) => {
          const isHalfStar = index < rating && rating < index + 1;
          return (
            <svg
              key={index}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`w-6 h-6 ${index < Math.floor(rating) ? "text-black" : "text-neutral-300"} , ${className}`}
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d={
                  isHalfStar
                    ? "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674 4.914.015c.969.003 1.372 1.241.588 1.81l-3.936 2.85 1.518 4.674c.3.921-.755 1.688-1.539 1.104L10 14.347l-3.914 2.707c-.784.584-1.839-.183-1.539-1.104l1.518-4.674-3.936-2.85c-.784-.57-.381-1.807.588-1.81l4.914-.015L9.049 2.927z"
                    : "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674 4.914.015c.969.003 1.372 1.241.588 1.81l-3.936 2.85 1.518 4.674c.3.921-.755 1.688-1.539 1.104L10 14.347l-3.914 2.707c-.784.584-1.839-.183-1.539-1.104l1.518-4.674-3.936-2.85c-.784-.57-.381-1.807.588-1.81l4.914-.015L9.049 2.927z"
                }
                clipRule='evenodd'
              />
            </svg>
          );
        })}
      </div>
      <button
        className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 rounded-full text-neutral-400 px-2 py-0 h-4'
        style={{ marginTop: "2px" }}>
        <span className='text-neutral-600 text-xs'>{rating}</span>
      </button>
    </div>
  );
}

export default Reviews;
