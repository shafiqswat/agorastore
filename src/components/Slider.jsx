/** @format */

import React, { useState, useEffect } from "react";
import { Card } from "./elements/Card";
import "../App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./elements/Carousel";

const ProductSlider = ({ productImages = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentImage);
    }
  }, [carouselApi, currentImage]);

  return (
    <div className='relative pb-20'>
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        className='lg:sticky mx-auto self-start lg:ml-20 m-0 max-w-[575px] lessMedium:min-w-full'>
        <CarouselContent>
          {productImages.length > 0 ? (
            productImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <div className='w-full h-[600px] flex justify-center items-center overflow-hidden'>
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div>No images available</div>
          )}
        </CarouselContent>
        <div className='flex gap-1 items-center mt-4 box-border'>
          {productImages.length > 0 ? (
            productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                width={100}
                height={100}
                className={`aspect-square cursor-pointer w-10 h-10 md:w-14 md:h-14 object-cover rounded-md border-2 transition-colors ${
                  currentImage === index
                    ? "border-lightbrown"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))
          ) : (
            <div>No images available</div>
          )}
        </div>
        <div className='siderBtnsConainer'>
          <CarouselPrevious
            className='z-10 w-12 h-12 bg-neutral-100 hover:bg-neutral-200'
            onClick={handlePrev}
          />
          <CarouselNext
            className='z-10 w-12 h-12 ms-4 bg-neutral-100 hover:bg-neutral-200'
            onClick={handleNext}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
