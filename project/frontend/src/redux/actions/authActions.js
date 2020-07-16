import * as types from "./actionTypes";
import * as authApi from "../../api/authApi";

export function loginUserRequest(data) {
  return {
    type: types.LOGIN_REQUEST,
    data
  }
}

export function loginUserSuccess(username) {
  return {
    type: types.LOGIN_SUCCESS,
    username
  }
}

export function loginUserError(error) {
  return {
    type: types.LOGIN_ERROR,
    error
  }
}

export function signupUserRequest(data){
  return {
    type: types.SIGNUP_REQUEST,
    data
  }
}

export function signupUserSuccess(){
  return {
    type: types.SIGNUP_SUCCESS
  }
}

export function signupUserError(error){
  return {
    type: types.SIGNUP_ERROR,
    error
  }
}

export function loginUser(data) {
  return function (dispatch) {
    dispatch(loginUserRequest(data))
    return (
      authApi.login(data.username, data.password)
      .then((username) => dispatch(loginUserSuccess(username)))
      .catch((error) => dispatch(loginUserError(error)))
    )
  }
}

export function signupUser(data){
  return function (dispatch) {
    dispatch(signupUserRequest(data))
    return (
      authApi.signup(data.username, data.password, data.email)
      .then(() => dispatch(signupUserSuccess()))
      .catch((error) => dispatch(signupUserError(error)))
    )
  }
}