import React from 'react';
import CartListItem from './CartListItem';

import './CartList.scss';

const CartList = ({ products, updateCartAmount, deleteFromCart }) => {
  return (
    <div className="CartList">
      {products.length > 0 ?
        products.map((record) => {
          return (
            <CartListItem
            key={record.product.id}
            product={record.product}
            amount={record.amount}
            updateCartAmount={updateCartAmount}
            deleteFromCart={deleteFromCart} />
          );
        })
        : "Twój koszyk jest pusty"}
    </div>
  );
}

export default CartList;
