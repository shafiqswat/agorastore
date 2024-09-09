/** @format */

import React from "react";
import SecondaryHeader from "../components/layout/SecondaryHeader";
import ProductShowcase from "../components/constant/productShowCase";
import SecondaryBtn from "../components/constant/SecondaryBtn";
import SectionHeading from "../components/constant/SectionHeading";

const Merchant = () => {
  return (
    <div>
      <SecondaryHeader
        firstNavLink='Login'
        FirstTo='/login'
        SecondNavLink='Sign up'
        SecondTo='/signup'
      />
      <ProductShowcase
        headingText='Increase your e-commerce store sales'
        firstBtn='Sign up for free'
        secondBtn='Book a demo'
        paraText="Agora is a search engine for e-commerce products that helps merchants sell more. We don't take a commission and your inventory is automatically uploaded and regularly updated."
      />
      <section>
        <div className='max-w-[940px] sm:mx-auto sm:px-5 px-1'>
          <iframe
            src='https://app.arcade.software/2cdXcna2R1rDuzuJOhiP'
            frameBorder='0'
            className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen'
            title='Descriptive Title for Iframe Content'
            allowFullScreen></iframe>
        </div>
        <p className='font-Lexend text-center mt-4'>
          Leading Shopify and WooCommerce stores use Agora
        </p>

        {/* Responsive image section */}
        <div className='flex flex-col sm:flex-row sm:justify-center sm:space-x-4 p-5 items-center my-20 px-20'>
          <img
            src='/images/listLogo1.png'
            alt='Skeleton Optics'
            className='w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 mb-4 sm:mb-0 object-contain'
          />
          <img
            src='/images/listLogo2.webp'
            alt='Skeleton Optics'
            className='w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 mb-4 sm:mb-0 object-contain'
          />
          <img
            src='/images/listLogo3.png'
            alt='Skeleton Optics'
            className='w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 mb-4 sm:mb-0 object-contain'
          />
          <img
            src='/images/listLogo4.png'
            alt='Skeleton Optics'
            className='w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 mb-4 sm:mb-0 object-contain'
          />
          <img
            src='/images/listLogo5.webp'
            alt='Skeleton Optics'
            className='w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 lg:w-44 lg:h-18 mb-4 sm:mb-0 object-contain'
          />
        </div>
      </section>

      {/* Quote section */}
      <section className='bg-lightgray py-20'>
        <h3 className='font-Lexend text-xl sm:text-2xl md:text-3xl text-center mx-auto md:w-[780px] px-4'>
          "Since becoming an Agora merchant, Calzuro has seen increased
          visibility, traffic, and sales, and we look forward to future success
          on the platform!"
        </h3>
        <div className='flex extraSmall:hidden justify-center items-center gap-5 my-10'>
          <img
            src='/images/merchants1.jpeg'
            alt='merchants'
            className='w-14 h-14'
          />
          <div>
            <p>
              <strong>Brooke H.</strong>
            </p>
            <p>Marketing, Calzuro</p>
          </div>
          <div className='w-[1px] h-12 bg-gray-300'></div>
          <img
            src='/images/merchants2.png'
            alt='merchants'
            className='w-24 h-12'
          />
        </div>
        <SecondaryBtn className='border-2 border-black h-16 mx-auto mt-4 sm:mt-0'>
          Read Calzuro's case study
        </SecondaryBtn>
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      <section className='my-10 px-10'>
        <SectionHeading
          headingText='Sponsored products'
          className='sm:text-4xl font-extrabold'
        />
        <p className='font-Lexend text-xl max-w-full w-full sm:w-[700px] md:w-[900px] mx-auto my-10 text-center text-[#2b2b2b]'>
          Ensure your products always appear at the top of search results
        </p>
        <div className='extraSmall:block flex justify-center gap-10 font-Lexend text-center text-white '>
          <div className='bg-black rounded-lg pb-5 extraSmall:mb-20'>
            <img
              src='/images/merchants3.png'
              alt='team member'
            />
            <h3 className='text-xl'>Verified products</h3>
            <p className='text-sm my-3'>
              Included with paid subscription plans
            </p>
            <p className='text-sm mb-5'>
              Appear in the top rows of results for relevant search queries
            </p>
          </div>
          <div className='bg-black rounded-lg'>
            <img
              src='/images/merchants4.png'
              alt='team member'
            />
            <h3 className='text-xl'>Boosted products</h3>
            <p className='text-sm my-3'>Pay per click advertising</p>
            <p className='text-sm mb-5'>
              Appear as the first result for relevant search queries
            </p>
          </div>
        </div>
        <SecondaryBtn className='border-2 border-black h-16 mx-auto  my-10'>
          View search data
        </SecondaryBtn>
      </section>
      <section className='mt-24'>
        <SectionHeading
          headingText='Frequently asked questions'
          className='sm:text-4xl font-extrabold'
        />
      </section>
    </div>
  );
};

export default Merchant;
