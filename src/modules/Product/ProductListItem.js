import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';

import './ProductListItem.scss';

const ProductListItem = ({ product }) => {
  return (
    <div className="ProductListItem">
      <h4 className="author">{product.author}</h4>
      <div className="image-container">
        <img className="image" src={require(`../../data${product.pic}`)} alt={product.pic} />
      </div>
      <h3 className="title">{product.title}</h3>
      <h4 className="price">{product.price} zł</h4>
    </div>
  );
}



export default ProductListItem;
