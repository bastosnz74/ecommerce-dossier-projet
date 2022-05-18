import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner , buttonText }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h3>Boutique E-Commerce</h3>
        <h3>High-Tech</h3>
        <Link href={`/allproduct`}>
          <button type="button">{buttonText}SHOP</button>
        </Link>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

      </div>
    </div>
  )
}

export default HeroBanner
