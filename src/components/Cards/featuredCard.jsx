/** @format */

import React from "react";
import { Card, CardContent } from "../ui/card";

function FeaturedCard({ item }) {
  return (
    <div className='group'>
      <Card className='overflow-hidden cursor-pointer'>
        <CardContent className='p-0'>
          <div className='grid grid-cols-2 gap-0.5 hover:bg-neutral-50'>
            <img
              src={item.image1}
              alt='Featured Card 1'
              className='w-full h-auto'
            />
            <img
              src={item.image2}
              alt='Featured Card 2'
              className='w-full h-auto'
            />
            <img
              src={item.image3}
              alt='Featured Card 3'
              className='w-full h-auto'
            />
            <img
              src={item.image4}
              alt='Featured Card 4'
              className='w-full h-auto'
            />
          </div>
        </CardContent>
      </Card>
      <p className='text-sm font-semibold group-hover:underline mt-2 cursor-pointer w-fit'>
        {item.paraText}
      </p>
    </div>
  );
}

export default FeaturedCard;
