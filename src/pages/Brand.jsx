/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";
import { ShareIcon } from "../components/constant/SvgIcons";
import BrandProvider from "../components/Context/BrandContext";
import BrandList from "../components/BrandList";

const Brand = () => {
  const { brandName } = useParams();

  return (
    <>
      <BrandProvider brandName={brandName}>
        <Header />
        <Container>
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
        </Container>
      </BrandProvider>
    </>
  );
};

export default Brand;
