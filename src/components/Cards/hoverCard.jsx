/** @format */

import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

const HoverCardComponent = ({ isOpen, toggleHoverCard, children, text }) => {
  return (
    <HoverCard
      open={isOpen}
      onOpenChange={toggleHoverCard}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='w-96 h-28'>
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
