import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state, username: action.username, isAuthenticated: true
      }
    case types.LOGIN_ERROR:
      return {
        ...state, loginError: action.error, isAuthenticated: false
      }
    default:
      return state;
  }
}