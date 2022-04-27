import React from 'react';

import { client } from '../lib/client';
import { Product } from '../components';

const All = ({ products }) => (
  <div>
    <p className="allproducts">Tous les produits</p>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default All;