import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    case types.LOAD_RESTAUTANTS_SUCCESS:
      return {
        ...state, restaurants: action.restaurants
      }
    default:
      return state;
  }
}