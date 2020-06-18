import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state, username: action.username, isAuthenticated: true
      }
    default:
      return state;
  }
}