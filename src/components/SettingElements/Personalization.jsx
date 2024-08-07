/** @format */

import React, { useContext, useState } from "react";
import { SelectedIcons } from "../constant/SvgIcons";
import CustomButton from "../constant/customButton";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../ui/sonner";
import { SelectedImagesContext } from "../Context/SelectedImagesContext";

const Personalization = () => {
  const images = [
    { id: 1, imgPath: "/images/personal1.jpg", imgText: "Books" },
    { id: 2, imgPath: "/images/personal2.jpg", imgText: "Electronics" },
    {
      id: 3,
      imgPath: "/images/personal3.jpg",
      imgText: "Clothing Shoes & Jewelry",
    },
    { id: 4, imgPath: "/images/personal4.jpg", imgText: "Home & Kitchen" },
    {
      id: 5,
      imgPath: "/images/personal5.jpg",
      imgText: "Beauty & Personal Care",
    },
    { id: 6, imgPath: "/images/personal1.jpg", imgText: "Toys & Games" },
    { id: 7, imgPath: "/images/personal1.jpg", imgText: "Sports & Outdoors" },
    { id: 8, imgPath: "/images/personal1.jpg", imgText: "Automotive" },
    {
      id: 9,
      imgPath: "/images/personal1.jpg",
      imgText: "Grocery & Gourmet Food",
    },
    { id: 10, imgPath: "/images/personal1.jpg", imgText: "Health & Household" },
  ];

  const { selectedImages, setSelectedImages } = useContext(
    SelectedImagesContext
  );
  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((imageId) => imageId !== id);
      } else if (prevSelected.length < 5) {
        return [...prevSelected, id];
      } else {
        return prevSelected;
      }
    });
  };

  const handleSubmit = () => {
    handleSubmit();
    toast("Updated successfully.", {
      description: "Personalization settings updated successfully",
      action: {
        onClick: () => navigate("/cart"),
      },
    });
  };

  return (
    <div className='border rounded-xl p-5 mt-10'>
      <Toaster />

      <h2 className='text-2xl font-semibold'>Personalization</h2>
      <p className='text-sm text-neutral-500'>
        Select up to 5 categories to customize your Agora home page.
      </p>
      <div className='grid grid-cols-5 gap-5 mt-5'>
        {images.map((item) => (
          <div
            className={`h-40 relative cursor-pointer overflow-hidden rounded-lg ${selectedImages.includes(item.id) ? "border-4 border-black" : ""}`}
            onClick={() => handleClick(item.id)}
            key={item.id}>
            {selectedImages.includes(item.id) && (
              <SelectedIcons className='absolute top-2 right-2 z-10' />
            )}
            <p className='absolute bottom-2 left-2 text-white z-20'>
              {item.imgText}
            </p>
            <img
              src={item.imgPath}
              alt='Select Fav'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50 z-0' />
          </div>
        ))}
        <CustomButton
          onClick={handleSubmit}
          BtnText='Submit'
          className='w-fit'
        />
      </div>
    </div>
  );
};

export default Personalization;
