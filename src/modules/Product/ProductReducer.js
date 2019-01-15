import { CREATE_PRODUCTS, SORT_ASC, SORT_DESC } from './ProductActions';

const initialState = {};

function compareValues(key, order="asc") {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if(varA > varB) {
      comparison = 1;
    } else if(varA < varB) {
      comparison = -1;
    }

    return (
      (order == 'desc') ? (comparison * -1) : comparison
    )
  }
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return { ...action.books };
    case SORT_ASC:
      return Object.values(state).sort(compareValues(action.field));
    case SORT_DESC:
      return Object.values(state).sort(compareValues(action.field, "desc"));
    default:
      return state;
  }
}

export default ProductReducer;
