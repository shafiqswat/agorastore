/** @format */

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";

function FeaturedCard({ item }) {
  return (
    <>
      <Link
        to={`/collections/${item.id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div className='group'>
          <Card className='overflow-hidden cursor-pointer'>
            <CardContent className='p-0'>
              <div className='grid grid-cols-2 gap-0.5 hover:bg-neutral-50'>
                <img
                  src={item.url}
                  alt='Featured Card 1'
                  className='w-full h-auto'
                />
                <img
                  src={item.url}
                  alt='Featured Card 2'
                  className='w-full h-auto'
                />
                <img
                  src={item.url}
                  alt='Featured Card 3'
                  className='w-full h-auto'
                />
                <img
                  src={item.url}
                  alt='Featured Card 4'
                  className='w-full h-auto'
                />
              </div>
            </CardContent>
          </Card>
          <p className='text-sm font-semibold group-hover:underline mt-2 cursor-pointer w-fit'>
            {item.title}
          </p>
        </div>
      </Link>
    </>
  );
}

export default FeaturedCard;
