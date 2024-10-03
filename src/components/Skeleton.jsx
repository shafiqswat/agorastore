/** @format */

import React from "react";
import { Skeleton } from "./elements/Skeleton";

const LoadingSkeleton = ({
  height = "h-72",
  width = "w-full",
  rounded = "rounded-lg",
  bgColor = "bg-gray-100",
  count = 1,
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 `}>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={`${width} ${height} ${rounded} ${bgColor}`}>
          <Skeleton className='h-full w-full' />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
