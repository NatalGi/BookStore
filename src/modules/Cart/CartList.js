import React from 'react';
import CartListItem from './CartListItem';

import './CartList.scss';

const CartList = ({ cart }) => {
  return (
    <div className="CartList">
      {cart.length > 0 ?
        cart.map((record) => <CartListItem key={record.product.id} product={record.product} amount={record.amount} />)
        : "Twój koszyk jest pusty"}
    </div>
  );
}

export default CartList;
