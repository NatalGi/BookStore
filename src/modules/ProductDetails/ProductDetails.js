import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Product/ProductActions';

import './ProductDetails.scss';

const ProductDetails = ({ match, products, addToCart }) => {
  let product = {};

  if(products[match.params.id]) {
    product = { ...products[match.params.id] };
  }

  return (
    <div className="ProductDetails">
      <div className="pic-section">
        <img className="image" src={product.pic ? require(`../../data${product.pic}`) : ""} alt={product.title} />
      </div>
      <div className="data-section">
        <h5 className="author">{product.author}</h5>
        <h2 className="title">{product.title}</h2>
        <h3 className="subtitle">{product.subtitle}</h3>
        <p className="desc">{product.desc}</p>
        <h5 className="info">Rok wydania: {product.year}</h5>
        <h5 className="divider"> | </h5>
        <h5 className="info">Wydawnictwo: {product.publisher}</h5>
        <h5 className="divider"> | </h5>
        <h5 className="info">Ilość stron: {product.pages}</h5>
        <button className="basket-btn" onClick={() => addToCart(product)}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productList,
  }
}

const mapDispatchToProps = {
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
