/** @format */

import React from "react";
import ProductShowcase from "../components/common/ProductShowCase";
import SocialHeader from "../components/layout/SocialHeader";

const About = () => {
  return (
    <div>
      <SocialHeader
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
