/** @format */

import React from "react";

function FooterNav({ links }) {
  return (
    <nav className='flex flex-col gap-1.5'>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.target || "_self"}
          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
          data-discover={link.dataDiscover || undefined}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default FooterNav;
