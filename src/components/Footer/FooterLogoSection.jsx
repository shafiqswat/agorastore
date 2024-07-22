/** @format */

import React from "react";

function FooterLogoSection() {
  return (
    <div>
      <img
        src='/images/logo.png'
        alt='Logo'
        style={{ width: "100px" }}
      />
      <span
        className='font-semibold text-xl mt-4'
        style={{
          color: "rgb(134, 134, 134)",
          display: "block",
          fontSize: "1rem",
          fontWeight: 500,
        }}>
        2,304,598 products
      </span>
      <div className='flex justify-around mt-4'>
        <a
          href='https://www.pinterest.com/searchagora/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/images/socialIcon1.png'
            className='mr-2 w-10 h-10'
            alt='Pinterest'
          />
        </a>
        <a
          href='https://twitter.com/SearchAgora'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/images/socialIcon2.png'
            className='mx-2 w-10 h-10'
            alt='Twitter'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/searchagora'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/images/socialIcon3.png'
            className='mx-2 w-10 h-10'
            alt='LinkedIn'
          />
        </a>
      </div>
    </div>
  );
}

export default FooterLogoSection;
