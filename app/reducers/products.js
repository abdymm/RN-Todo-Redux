import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCHING_TODOS,
  FETCHING_TODOS_SUCCESS,
  FETCHING_TODOS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  products: [],
  isFetching: false,
  success: true
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODOS: {
      console.log("fetching..");
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCHING_TODOS_SUCCESS:
      console.log("fetched_success");
      return {
        ...state,
        isFetching: false,
        success: action.payload.success,
        products: action.payload.games
      };
    case FETCHING_TODOS_FAILURE:
      console.log("fetched_fail");
      return {
        ...state,
        isFetching: false,
        success: false
      };

    default:
      return state;
  }
};

export default products;
