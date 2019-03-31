import {
  FETCHING_FIXTURES,
  FETCHING_FIXTURES_SUCCESS,
  FETCHING_FIXTURES_FAILURE
} from "../actions/actionTypes";

const initialState = {
  fixtures: [],
  isFetching: false,
  success: true
};
const fixtures = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FIXTURES: {
      console.log("fixture-fetching", state);
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCHING_FIXTURES_SUCCESS:
      let resultState = {
        ...state,
        isFetching: false,
        success: action.payload.success,
        fixtures: action.payload.fixtures
      };
      console.log("fixture-success", action.payload);
      return resultState;
    case FETCHING_FIXTURES_FAILURE:
      console.log("fixture-fail", state);
      return {
        ...state,
        isFetching: false,
        success: false
      };

    default:
      return state;
  }
};

export default fixtures;
