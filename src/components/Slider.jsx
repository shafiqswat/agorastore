/** @format */

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import "../App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function ProductSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);

  const ProductImages = [
    "/images/handbag1.webp",
    "/images/handbag2.webp",
    "/images/handbag3.webp",
    "/images/handbag4.webp",
    "/images/handbag5.webp",
    "/images/handbag6.webp",
  ];

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? ProductImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === ProductImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentImage);
    }
  }, [currentImage, carouselApi]);

  return (
    <>
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        className='lg:sticky mx-auto self-start lg:ml-20 m-0 max-w-[575px]'>
        <div className='relative'>
          <CarouselContent>
            {ProductImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className='mx-auto  bg-transparent'
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex gap-1 items-center mt-4'>
            {ProductImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product Image ${index + 1}`}
                width={100}
                height={100}
                className={`aspect-square cursor-pointer w-10 h-10 md:w-14 md:h-14 object-cover rounded-md border-2 transition-colors ${
                  currentImage === index
                    ? "border-lightbrown"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
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
        </div>
      </Carousel>
    </>
  );
}

export default ProductSlider;
