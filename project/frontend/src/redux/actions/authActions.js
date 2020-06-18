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

export function loginUser(data) {
  return function (dispatch) {
    dispatch(loginUserRequest(data))
    return (
      authApi.login(data.username, data.password)
      .then((username) => dispatch(loginUserSuccess(username)))
    )
  }
}