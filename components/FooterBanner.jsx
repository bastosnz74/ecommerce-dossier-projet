import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{smallText}</p>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          
        </div>
        <div className="right">
          <h3>{midText}</h3>
          <p>{desc}</p>
          <p>{saleTime}</p>
          <Link href={`/product/casque-bluetooth-sony`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        
      </div>
    </div>
  )
}

export default FooterBanner
