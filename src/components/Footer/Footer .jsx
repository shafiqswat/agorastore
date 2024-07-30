/** @format */

import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterNav from "./FooterNav";

function Footer() {
  const navLinks1 = [
    { text: "Home", href: "/", dataDiscover: "true" },
    {
      text: "About",
      href: "https://merchant.searchagora.com/about",
      target: "_blank",
    },
    { text: "Contact", href: "mailto:support@searchagora.com" },
    { text: "Terms", href: "/terms", dataDiscover: "true" },
    { text: "Privacy", href: "/privacy", dataDiscover: "true" },
  ];

  const navLinks2 = [
    { text: "Merchants", href: "https://merchant.searchagora.com/" },
    { text: "Docs", href: "https://docs.searchagora.com/" },
    { text: "Collections", href: "/collections", dataDiscover: "true" },
    {
      text: "Popular products",
      href: "/popular-products",
      dataDiscover: "true",
    },
    { text: "Store crawler", href: "/crawler", dataDiscover: "true" },
  ];

  return (
    <footer className='max-w-7xl relative w-full md:px-8 px-6 mx-auto overflow-visible'>
      <div className='text-neutral-500 md:flex-row flex flex-col items-start gap-10 py-20 mt-20 text-sm border-t'>
        <FooterLogoSection />
        <div className='md:ml-auto flex gap-20'>
          <FooterNav links={navLinks1} />
          <FooterNav links={navLinks2} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
