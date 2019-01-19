import { FETCH_PRODUCTS, SORT_ASC, SORT_DESC, ADD_TO_CART } from './ProductActions';

const initialState = {
  productList: {},
  displayOrder: {},
  cart: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {productList: { ...action.products }});
    case SORT_ASC:
      return Object.assign({}, state, {displayOrder: {field: action.field, direction: 'asc'}});
    case SORT_DESC:
      return Object.assign({}, state, {displayOrder: {field: action.field, direction: 'desc'}});
    case ADD_TO_CART:
      let productIndex = state.cart.findIndex((record) => {
        return record.product.id === action.product.id;
      });
      if(productIndex >= 0) {
        return Object.assign({}, state, state.cart[productIndex].amount += 1);
      }
      return Object.assign({}, state, {cart: [...state.cart, {product: action.product, amount: 1}]});
    default:
      return state;
  }
}

export default ProductReducer;
