/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import { ShareIcon } from "../assets/SvgIcons";
import BrandProvider from "../context/BrandContext";
import BrandList from "../components/BrandList";
import MainWrapper from "../components/common/MainWrapper";

const Brand = () => {
  const { brandName } = useParams();

  return (
    <>
      <BrandProvider brandName={brandName}>
        <Header />
        <MainWrapper>
          <div className='border p-5 rounded-xl'>
            <div className=' flex justify-between items-center'>
              <div></div>
              <h2 className='text-2xl font-semibold'>{brandName}</h2>
              <div className='bg-lightgray py-2 px-4 cursor-pointer rounded-2xl'>
                <ShareIcon />
              </div>
            </div>
            <BrandList />
          </div>
        </MainWrapper>
      </BrandProvider>
    </>
  );
};

export default Brand;
