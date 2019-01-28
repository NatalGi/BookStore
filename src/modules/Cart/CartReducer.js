import { ADD_TO_CART, UPDATE_CART_AMOUNT, DELETE_FROM_CART, ADD_DISCOUNT_CODE, DELETE_DISCOUNT_CODE } from './CartActions';

const initialState = {
  products: {},
  discountCode: {},
};

const CartReducer = (state = initialState, action) => {
  let newState = '';
  switch(action.type) {
    case ADD_TO_CART:
      if(state.products[action.product.id]) {
        return Object.assign({}, state, state.products[action.product.id].amount += 1);
      }
      const newProducts = {...state.products, [action.product.id]: {product: action.product, amount: 1}};
      return Object.assign({}, state, {products: newProducts});
    case UPDATE_CART_AMOUNT:
      return Object.assign({}, state, state.products[action.productId].amount += action.operation);
    case DELETE_FROM_CART:
      newState = { ...state };
      delete newState.products[action.productId];
      return newState;
    case ADD_DISCOUNT_CODE:
      return { ...state, discountCode: action.discountCode, };
    case DELETE_DISCOUNT_CODE:
      newState = { ...state };
      delete newState.discountCode;
      newState.discountCode = {};
      return newState;
    default:
      return state;
  }
}

export default CartReducer;
