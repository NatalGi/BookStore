import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import Pagination from '../Pagination/Pagination';

import './ProductList.scss';

const ProductList = ({ products, page }) => {
  const itemsToPage = 6;
  const rangeFrom = (page - 1) * itemsToPage;
  const rangeTo = (page * itemsToPage);
  const productsTab = products;
  const subProductsTab = productsTab.slice(rangeFrom, rangeTo);
  const pageCount = Math.ceil(productsTab.length/itemsToPage);

  return (
    <div className="container">
      <div className="ProductList">
        {subProductsTab.map(product => <ProductListItem key={product.id} product={product} />)}
      </div>
      {page <= pageCount ? <Pagination className="Pagination" page={page} pageCount={pageCount}/> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  }
}

export default connect(mapStateToProps)(ProductList);
