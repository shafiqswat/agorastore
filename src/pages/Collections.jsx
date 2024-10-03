/** @format */

import React, { useContext } from "react";
import Header from "../components/layout/Header";
import LoadingSkeleton from "../components/Skeleton";
import FeaturedCard from "../components/cards/FeaturedCard";
import { FeaturedContext } from "../context/FeaturedContext";
import MainWrapper from "../components/common/MainWrapper";

const Collections = () => {
  const { featuredData, loading } = useContext(FeaturedContext);
  return (
    <div>
      <Header />
      <MainWrapper>
        <h2 className='font-sans font-semibold text-lg text-center'>
          Collections
        </h2>
        {loading ? (
          <LoadingSkeleton count={8} />
        ) : (
          <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36'>
            {featuredData.map((item, index) => (
              <FeaturedCard
                key={index}
                item={item}
              />
            ))}
          </div>
        )}
      </MainWrapper>
    </div>
  );
};

export default Collections;
