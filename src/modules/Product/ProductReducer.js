import { FETCH_PRODUCTS, SORT_ASC, SORT_DESC } from './ProductActions';

const initialState = {
  productList: {},
  order: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {productList: { ...action.products }});
    case SORT_ASC:
      return Object.assign({}, state, {order: {field: action.field, direction: 'asc'}});
    case SORT_DESC:
      return Object.assign({}, state, {order: {field: action.field, direction: 'desc'}});
    default:
      return state;
  }
}

export default ProductReducer;
