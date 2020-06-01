import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FEATURES_SUCCESS:
      return {
        ...state, features: action.payload
      }
    default:
      return state;
  }
}