import { FETCH_DISCOUNT_CODES } from './DiscountCodesActions';

const initialState = {};

const DiscountCodesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISCOUNT_CODES:
      return { ...action.discountCodes };
    default:
      return state;
  }
}

export default DiscountCodesReducer;
