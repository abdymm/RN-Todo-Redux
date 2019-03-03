import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import cartItem from "./cartItem";

export default combineReducers({
  todos,
  visibilityFilter,
  cartItem
});
