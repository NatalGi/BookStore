import React from 'react';
import parseCurrency from '../../util/parseCurrency';

import { FiTrash2 } from 'react-icons/fi';
import './CartListItem.scss';

const CartListItem = ({ product, amount, updateCartAmount, deleteFromCart }) => {
  const isDisabled = (amount === 1) ? true : false;
  return (
    <div className="CartListItem">
      <div className="pic-section">
        <img className="pic" src={require(`../../data${product.pic}`)} alt={product.title} />
      </div>
      <div className="data-section">
        <h5 className="author">{product.author}</h5>
        <h2 className="title">{product.title}</h2>
        <h3 className="subtitle">{product.subtitle}</h3>
      </div>
      <div className="price-section">
        <h3 className="price">{parseCurrency(product.price)} zł</h3>
      </div>
      <div className="amount-section">
        <button className="small-btn" onClick={() => updateCartAmount(product.id, -1)} disabled={isDisabled}>-</button>
        <span className="margin">{amount}</span>
        <button className="small-btn" onClick={() => updateCartAmount(product.id, 1)}>+</button>
        <span className="margin">szt</span>
        <button className="small-btn icon" onClick={() => deleteFromCart(product.id)}><FiTrash2 /></button>
      </div>
    </div>
  );
}

export default CartListItem;
