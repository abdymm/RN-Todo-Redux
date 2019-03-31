import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import cartItem from "./cartItem";
import products from "./products";
import fixtureState from "./setting.reducer";

export default combineReducers({
  todos,
  visibilityFilter,
  cartItem,
  products,
  fixtureState
});
