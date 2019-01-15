import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';

import './ProductList.scss';

const ProductList = ({ books }) => {
  return (
    <div className="ProductList">
      {Object.values(books).map(book => <ProductListItem key={book.id} book={book} />)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(ProductList);
