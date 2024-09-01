/** @format */

import React from "react";
import SecondaryHeader from "../components/layout/SecondaryHeader";
import ProductShowcase from "../components/constant/productShowCase";

const About = () => {
  return (
    <div>
      <SecondaryHeader
        firstNavLink='Merchants'
        FirstTo='/merchant'
        SecondNavLink='Search products'
        SecondTo='/'
      />
      <section>
        <ProductShowcase
          headingText='Discover a world of products'
          paraText="Agora is a search engine for e-commerce products. We've indexed millions of products sold on different stores and made them easy to purchase. Save time and money with Agora."
          firstBtn='Get started'
          secondBtn='Browse collections'
        />
      </section>
    </div>
  );
};

export default About;
