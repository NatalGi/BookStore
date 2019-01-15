import React from 'react';
import Sort from '../Sort/Sort';
import ProductList from '../Product/ProductList';

import './Home.scss';

export const Home = () => (
  <div className="Home">
    <Sort />
    <ProductList />
  </div>
);
