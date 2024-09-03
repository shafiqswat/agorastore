/** @format */

import React from "react";
import SecondaryHeader from "../components/layout/SecondaryHeader";
import ProductShowcase from "../components/constant/productShowCase";

const Merchant = () => {
  return (
    <div>
      <SecondaryHeader
        firstNavLink='Login'
        FirstTo='/login'
        SecondNavLink='Sign up'
        SecondTo='/signup'
      />
      <section>
        <ProductShowcase
          headingText='Increase your e-commerce store sales'
          firstBtn='Sign up for free'
          secondBtn='Book a demo'
          paraText="Agora is a search engine for e-commerce products that helps merchants sell more. We don't take a commission and your inventory is automatically uploaded and regularly updated."
        />
        <div className='w-[940px] mx-auto h-screen'>
          <iframe
            src='https://app.arcade.software/2cdXcna2R1rDuzuJOhiP'
            frameBorder='0'
            className='h-full w-full'
            title='Descriptive Title for Iframe Content'
            allowFullScreen></iframe>
        </div>
        <p className='font-Lexend text-center'>
          Leading Shopify and WooCommerce stores use Agora
        </p>
        <div className='flex flex-wrap justify-center space-x-4 my-16'>
          <img
            src='/images/listLogo1.png'
            alt='Skeleton Optics'
            className='max-w-72 max-h-16 object-contain'
          />
          <img
            src='/images/listLogo2.webp'
            alt='Skeleton Optics'
            className='max-w-72 max-h-16 object-contain'
          />
          <img
            src='/images/listLogo3.png'
            alt='Skeleton Optics'
            className='max-w-72 max-h-16 object-contain'
          />
          <img
            src='/images/listLogo4.png'
            alt='Skeleton Optics'
            className='max-w-72 max-h-16 object-contain'
          />
          <img
            src='/images/listLogo5.webp'
            alt='Skeleton Optics'
            className='max-w-72 max-h-16 object-contain'
          />
        </div>
      </section>
    </div>
  );
};

export default Merchant;
