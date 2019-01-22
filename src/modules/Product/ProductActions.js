import fetchFromFile from '../../util/fetchData';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SORT_ASC = 'SORT_ASC';
export const SORT_DESC = 'SORT_DESC';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function successFetchProducts() {
  return (dispatch) => {
    fetchFromFile()
      .then(res => {
        dispatch(fetchProducts(res.books));
      });
  }
}

export function fetchProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  }
}

export function sortAsc(field) {
  return {
    type: SORT_ASC,
    field,
  }
}

export function sortDesc(field) {
  return {
    type: SORT_DESC,
    field,
  }
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  }
}

export function updateCartAmount(productId, operation) {
  return {
    type: UPDATE_CART_AMOUNT,
    productId,
    operation,
  }
}

export function deleteFromCart(productId) {
  return {
    type: DELETE_FROM_CART,
    productId,
  }
}
