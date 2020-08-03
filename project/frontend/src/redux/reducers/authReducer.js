import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state, username: action.username, isAuthenticated: true
      }
    case types.LOGIN_ERROR:
      return {
        ...state, loginError: action.error, isAuthenticated: false
      }
    case types.SIGNUP_REQUEST:
      return {
        ...state, createdUser: false
      }
    case types.SIGNUP_SUCCESS:
      return {
        ...state, signupError: null, createdUser: true
      }
    case types.SIGNUP_ERROR:
      return {
        ...state, signupError: action.error
      }
    default:
      return state;
  }
}