import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    default:
      return state;
  }
}