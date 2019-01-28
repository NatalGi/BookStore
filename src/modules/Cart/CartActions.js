export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const ADD_DISCOUNT_CODE = 'ADD_DISCOUNT_CODE';
export const DELETE_DISCOUNT_CODE = 'DELETE_DISCOUNT_CODE';

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

export function addDiscountCode(discountCode) {
  return {
    type: ADD_DISCOUNT_CODE,
    discountCode,
  }
}

export function deleteDiscountCode() {
  return {
    type: DELETE_DISCOUNT_CODE,
  }
}
