/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FeaturedContext } from "../components/Context/FeaturedContext";
import Container from "../components/layout/container";
import Header from "../components/layout/Header";
import CollectionList from "../components/CollectionList";
import { CollectionProvider } from "../components/Context/SingleCollection";
import CustomButton from "../components/constant/customButton";

function Collections() {
  const { collectionId } = useParams();
  const { featuredData, loading, error } = useContext(FeaturedContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = featuredData.find((p) => p._id === collectionId);
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Header />
      <Container>
        <div className='border p-5 rounded-xl'>
          <div className='flex justify-between items-center'>
            <div></div>
            <h2 className='text-2xl font-semibold'>{product.title}</h2>
            <CustomButton BtnText='Share Collection' />
          </div>
          <CollectionProvider>
            <CollectionList />
          </CollectionProvider>
        </div>
      </Container>
    </>
  );
}

export default Collections;
