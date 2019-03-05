import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_TODOS,
  ADD_TO_CART,
  FETCHING_TODOS,
  FETCHING_TODOS_FAILURE,
  FETCHING_TODOS_SUCCESS
} from "./actionTypes";

let nextId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const filterTodos = status => ({
  type: FILTER_TODOS,
  status
});

export function fetchProducts() {
  return dispatch => {
    dispatch(getProducts());
    return fetch("https://api.myjson.com/bins/sitmu")
      .then(res => res.json())
      .then(json => {
        return dispatch(getProductsSuccess(json));
      })
      .catch(err => dispatch(getProductsFailure(err)));
  };
}

function getProducts() {
  return {
    type: FETCHING_TODOS
  };
}

function getProductsSuccess(payload) {
  return {
    type: FETCHING_TODOS_SUCCESS,
    payload
  };
}

function getProductsFailure() {
  return {
    type: FETCHING_TODOS_FAILURE
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  };
}
