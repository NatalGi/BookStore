import fetchFromFile from '../../util/fetchData';

export const CREATE_PRODUCTS = 'CREATE_PODUCTS';
export const SORT_ASC = 'SORT_ASC';
export const SORT_DESC = 'SORT_DESC';

export function fetchProducts() {
  return (dispatch) => {
    const res = fetchFromFile()
      .then(res => {
        dispatch(createProducts(res.books));
      });
    return;
  }
}

export function createProducts(books) {
  return {
    type: CREATE_PRODUCTS,
    books,
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
