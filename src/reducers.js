import { combineReducers } from 'redux';

import products from './modules/Product/ProductReducer';
import discountCodes  from './modules/DiscountCodes/DiscountCodesReducer';
import cart from './modules/Cart/CartReducer';

export default combineReducers({
  products,
  discountCodes,
  cart,
});
