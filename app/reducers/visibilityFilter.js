import { FILTER_TODOS } from "../actions/actionTypes";

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case FILTER_TODOS:
    state = action.status;
    console.log("STATE", state);
    console.log("ACTION", action);

      return state;
    default:
      return state;
  }
};

export default visibilityFilter;
