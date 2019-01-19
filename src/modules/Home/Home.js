import React from 'react';
import Sort from '../Sort/Sort';
import ProductList from '../Product/ProductList';

import './Home.scss';

export const Home = ({ match }) => {
  const pageNumber = match.params.page ? match.params.page : 1;

  return (
    <div className="Home">
      <Sort />
      <ProductList page={pageNumber}/>
    </div>
  );
};
