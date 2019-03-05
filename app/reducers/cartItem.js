import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";


const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("payload", state);
      return [...state, action.payload];
    }
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartItem;
