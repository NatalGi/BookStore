import { FETCH_PRODUCTS, SORT_ASC, SORT_DESC, ADD_TO_CART, UPDATE_CART_AMOUNT, DELETE_FROM_CART } from './ProductActions';

const initialState = {
  productList: {},
  displayOrder: {},
  cart: {},
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
      if(state.cart[action.product.id]) {
        return Object.assign({}, state, state.cart[action.product.id].amount += 1);
      }
      const newCart = {...state.cart, [action.product.id]: {product: action.product, amount: 1}};
      return Object.assign({}, state, {cart: newCart});
    case UPDATE_CART_AMOUNT:
      return Object.assign({}, state, state.cart[action.productId].amount += action.operation);
    case DELETE_FROM_CART:
      let newState = { ...state };
      delete newState.cart[action.productId];
      return newState;
    default:
      return state;
  }
}

export default ProductReducer;
