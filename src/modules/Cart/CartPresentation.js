import React from 'react';
import CartList from './CartList';
import Popup from '../Popup/Popup';

import { FiCheck, FiX } from 'react-icons/fi';
import './CartPresentation.scss';

const CartPresentation = ({ products, state, discountCodeChangeHandler, checkDiscountCode, deleteDiscountCode, popupExitHandler, updateCartAmount, deleteFromCart  }) => {
  return (
    <div className="Cart">
      <CartList products={products} updateCartAmount={updateCartAmount} deleteFromCart={deleteFromCart} />
      <div className="summary">
        <div className="discount-section">
          {state.isDiscountCode ?
            <div className="discount-info">
              {state.discountInfo}
              <button className="small-btn" onClick={() => deleteDiscountCode()}><FiX /></button>
            </div> : ""
          }
          {
            state.discountCodeError ? <Popup message={state.errorMessage} exitHandler={popupExitHandler} /> : ""
          }
          <div className={ state.isDiscountCode ? "discount-code" : "discount-code show" }>
            <input className="discount-code-input"
              value={state.discountCodeInput}
              onChange={(event) => discountCodeChangeHandler(event)}
              placeholder="kod rabatowy"
            />
            <button className="accept-code-btn" onClick={() => checkDiscountCode()}>{<FiCheck />}</button>
          </div>
        </div>
        <div>Razem: <span className="cartSum">{state.cartSum}</span> zł</div>
        <button className="buy-btn">Złóż zamówienie</button>
      </div>
    </div>
  );
}

export default CartPresentation;
