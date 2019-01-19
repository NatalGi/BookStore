import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

import './ProductListItem.scss';

const ProductListItem = ({ product }) => {
  return (
    <div className="ProductListItem" >
      <h4 className="author">{product.author}</h4>
      <Link className="image-container" to={'/productDetails/' + product.id}>
        <img className="image" src={require(`../../data${product.pic}`)} alt={product.title} />
      </Link>
      <Link className="title" to={'/productDetails/' + product.id}>
        {product.title.length > 26 ? product.title.substring(0, 26) + "..." : product.title}
      </Link>
      <h4 className="subtitle">{product.subtitle ? (product.subtitle.length > 40 ? product.subtitle.substring(0, 40) + "..." : product.subtitle) : ""}</h4>
      <h4 className="price">{product.price} zł</h4>
    </div>
  );
}



export default ProductListItem;
