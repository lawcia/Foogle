import authReducer from "./authReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

describe("auth reducer", () => {

  it("should return state with username and authorised true when login is successful", () => {
    const username = "sandy";
    expect(authReducer(undefined, {
        type: types.LOGIN_SUCCESS,
        username
      }))
      .toEqual({
        ...initialState.auth,
        username,
        isAuthenticated: true 
      })
  })

  it("should return state with login error message", () => {

    const error = ['Something went wrong'];

    expect(authReducer(undefined, {
      type: types.LOGIN_ERROR,
      error
    })).toEqual({
      ...initialState.auth,
      loginError: error, 
      isAuthenticated: false
    })
  })

})