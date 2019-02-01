import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Cart/CartActions';
import parseCurrency from '../../util/parseCurrency';

import './ProductDetails.scss';

const ProductDetails = ({ match, products, addToCart }) => {
  let product = {};

  if(products[match.params.id]) {
    product = { ...products[match.params.id] };
    product.desc = product.desc.split('\n').map(function(item, key) {
      return (
        <p key={key}>
          {item}
          <br/>
        </p>
      )
    });
  }

  return (
    <div className="ProductDetails">
      <div className="section-one">
        <div className="pic-container">
          <img className="pic" src={product.pic ? require(`../../data${product.pic}`) : ""} alt={product.title} />
        </div>
        <div className="info-container">
          {product.state !== "false" ? <div className="state">{product.state}</div> : ""}
          <h5 className="author">{product.author}</h5>
          <h2 className="title">{product.title}</h2>
          <h3 className="subtitle">{product.subtitle}</h3>
          <h5 className="info">Rok wydania: {product.year}</h5>
          <h5 className="divider"> | </h5>
          <h5 className="info">Wydawnictwo: {product.publisher}</h5>
          <h5 className="divider"> | </h5>
          <h5 className="info">Ilość stron: {product.pages}</h5>
          <h5 className="divider"> | </h5>
          <h5 className="info">Oprawa: {product.cover}</h5>
          <h3 className="price">{product.price ? parseCurrency(product.price) : 0} zł</h3>
          <button className="basket-btn" onClick={() => addToCart(product)}>Dodaj do koszyka</button>
        </div>
      </div>
      <div className="section-two">
        <div className="description">
          <p className="desc">{product.desc}</p>
        </div>
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
