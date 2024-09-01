/** @format */

import React from "react";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";

function FeaturedCard({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // const formattedCollectionName = item.title.trim().replace(/\s+/g, "-");
    navigate(`/collections/${item._id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleClick}>
      <div className='group'>
        <Card className='overflow-hidden cursor-pointer'>
          <CardContent className='p-0'>
            <div className='grid grid-cols-2 gap-0.5 hover:bg-neutral-50'>
              {item.products.slice(0, 4).map((product, index) => (
                <img
                  key={index}
                  src={product.imageUrl || product.images[0]}
                  alt={`Featured Card ${index + 1}`}
                  className='w-full h-auto'
                />
              ))}
            </div>
          </CardContent>
        </Card>
        <p className='text-sm font-semibold group-hover:underline mt-2 cursor-pointer w-fit'>
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default FeaturedCard;
