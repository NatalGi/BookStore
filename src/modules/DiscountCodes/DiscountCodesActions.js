import fetchFromFile from '../../util/fetchData';

export const FETCH_DISCOUNT_CODES = 'FETCH_DISCOUNT_CODES';

export function successFetchDiscountCodes() {
  return (dispatch) => {
    fetchFromFile()
      .then(res => {
        dispatch(fetchDiscountCodes(res.discountCodes));
      });
  }
}

export function fetchDiscountCodes(discountCodes) {
  return {
    type: FETCH_DISCOUNT_CODES,
    discountCodes,
  }
}
