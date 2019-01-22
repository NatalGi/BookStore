import React from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';
import Money from 'money-math';

import './Cart.scss';

const parse = (floatValue) => {
  return Money.floatToAmount(floatValue);
}

const add = (a, b) => {
  return Money.add(parse(a), Money.mul(parse(b.product.price), parse(b.amount)));
}

const Cart = ({ cart }) => {
  let total = 0;

  if(cart) {
    total = Money.format("PLN", parse(cart.reduce(add, 0)));
  }

  return (
    <div className="Cart">
      <CartList cart={cart}/>
      <div className="summary">
        <div>Razem: <span className="total">{total}</span> zł</div>
        <button className="buy-btn">Złóż zamówienie</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: Object.values(state.products.cart),
  }
}

export default connect(mapStateToProps)(Cart);
