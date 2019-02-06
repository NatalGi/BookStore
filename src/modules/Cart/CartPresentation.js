import React from 'react';
import CartList from './CartList';
import Popup from '../Popup/Popup';
import Money from 'money-math';

import { FiCheck, FiX } from 'react-icons/fi';
import './CartPresentation.scss';

const CartPresentation = (props) => {
  return (
    <div className="Cart">
      <CartList products={props.products} updateCartAmount={props.updateCartAmount} deleteFromCart={props.deleteFromCart} />
      <div className="summary">
        <div className="discount-section">
          {props.state.isDiscountCode ?
            <div className="discount-info">
              {props.state.discountInfo}
              <button className="small-btn" aria-label="Usuń kod rabatowy" onClick={() => props.deleteDiscountCode()}><FiX /></button>
            </div> : ""
          }
          {
            props.state.discountCodeError ? <Popup message={props.state.errorMessage} exitHandler={props.discountCodePopupExitHandler} /> : ""
          }
          <div className={props.state.isDiscountCode ? "discount-code" : "discount-code show" }>
            <input className="discount-code-input"
              value={props.state.discountCodeInput}
              onChange={(event) => props.discountCodeChangeHandler(event)}
              placeholder="kod rabatowy"
            />
            <button className="accept-code-btn" aria-label="Sprawdź kod" onClick={() => props.checkDiscountCode()}>{<FiCheck />}</button>
          </div>
        </div>
        <div>Razem: <span className="cartSum">{props.state.cartSum}</span> zł</div>
        <button className="buy-btn" aria-label="Złóż zamówienie" onClick={() => props.submitOrder()} disabled={Money.isZero(props.state.cartSum) ? true : false}>Złóż zamówienie</button>
        { props.state.submitOrder ?
          <Popup
            message={props.state.orderSummary}
            exitHandler={props.submitOrderPopupExitHandler}
            tabular="true"
            data={{discount: props.state.discountInfo, cartSum: props.state.cartSum}}
          />
          : "" }
      </div>
    </div>
  );
}

export default CartPresentation;
