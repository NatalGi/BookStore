import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';

import './ProductListItem.scss';

const ProductListItem = ({ book }) => {
  return (
    <div className="ProductListItem">
      <h4 className="author">{book.author}</h4>
      <div className="image-container">
        <img className="image" src={require(`../../data${book.pic}`)} alt={book.pic} />
      </div>
      <h3 className="title">{book.title}</h3>
      <h4 className="price">{book.price} zł</h4>
    </div>
  );
}



export default ProductListItem;
