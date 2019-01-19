import { combineReducers } from 'redux';

import products from './modules/Product/ProductReducer';

export default combineReducers({
  products,
});
