import { FETCH_PRODUCTS, SORT_ASC, SORT_DESC } from './ProductActions';
import compareObjects from '../../util/compareObjects';

const initialState = {};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...action.products };
    case SORT_ASC:
      return Object.values(state).sort(compareObjects(action.field));
    case SORT_DESC:
      return Object.values(state).sort(compareObjects(action.field, "desc"));
    default:
      return state;
  }
}

export default ProductReducer;
