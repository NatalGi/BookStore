import React from 'react';
import { Link } from 'react-router-dom';
import parseCurrency from '../../util/parseCurrency';
//import PropTypes from 'prop-types';

import './ProductListItem.scss';

const ProductListItem = ({ product, idsTab, itemIndex }) => {
  return (
    <div className="ProductListItem" >
      <h4 className="author">{product.author.length > 36 ? product.author.substring(0, 36) + "..." : product.author}</h4>
      <Link className="image-container" to={{pathname: '/productDetails/' + product.id, state: {idsTab, itemIndex, }}}>
        <img className="image" src={require(`../../data${product.pic}`)} alt={product.title} />
      </Link>
      <Link to={{pathname: '/productDetails/' + product.id, state: {idsTab, itemIndex, }}}>
        <h2 className="title">{product.title.length > 26 ? product.title.substring(0, 26) + "..." : product.title}</h2>
      </Link>
      <h3 className="subtitle">{product.subtitle ? (product.subtitle.length > 40 ? product.subtitle.substring(0, 40) + "..." : product.subtitle) : ""}</h3>
      <h4 className="price">{parseCurrency(product.price)} zł</h4>
      {product.state !== "false" ? <div className="state">{product.state}</div> : ""}
    </div>
  );
}

export default ProductListItem;
