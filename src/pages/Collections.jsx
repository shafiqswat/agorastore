/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FeaturedContext } from "../components/Context/FeaturedContext";
import Container from "../components/layout/container";
import { Card } from "../components/ui/card";
import Header from "../components/layout/Header";
import CustomButton from "../components/constant/customButton";
import CollectionList from "../components/CollectionList";
import { CollectionProvider } from "../components/Context/SingleCollection";

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
        <Card>
          <div className='flex justify-between items-center p-6'>
            <div></div>
            <h2 className='text-2xl font-semibold'>{product.title}</h2>
            <CustomButton BtnText='Share collection' />
          </div>
          <CollectionProvider>
            <CollectionList />
          </CollectionProvider>
        </Card>
      </Container>
    </>
  );
}

export default Collections;
