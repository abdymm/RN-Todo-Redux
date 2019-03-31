import {
  FETCHING_FIXTURES,
  FETCHING_FIXTURES_FAILURE,
  FETCHING_FIXTURES_SUCCESS
} from "./actionTypes";

export function fetchFixtures() {
  return dispatch => {
    dispatch(getFixtures());
    return fetch("https://demo1223215.mockable.io/fixtures")
      .then(res => res.json())
      .then(json => {
        return dispatch(getFixturesSuccess(json));
      })
      .catch(err => dispatch(getFixturesFailure(err)));
  };
}

function getFixtures() {
  return {
    type: FETCHING_FIXTURES
  };
}

function getFixturesSuccess(payload) {
  return {
    type: FETCHING_FIXTURES_SUCCESS,
    payload
  };
}

function getFixturesFailure() {
  return {
    type: FETCHING_FIXTURES_FAILURE
  };
}
