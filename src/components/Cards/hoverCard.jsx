/** @format */

import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../elements/Hover-card";

const HoverCardComponent = ({
  isOpen,
  toggleHoverCard,
  children,
  text,
  className,
}) => {
  return (
    <HoverCard
      open={isOpen}
      onOpenChange={toggleHoverCard}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className={`w-96 h-fit ${className}`}>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <p class='text-sm'>{text}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardComponent;
