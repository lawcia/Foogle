import authReducer from "./authReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

describe("auth reducer", () => {

  it("should return intial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState.auth)
  })

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

  it("should return state with signup errors", () => {

    const error = {
      username: [],
      email: [],
      password: []
    }
    expect(authReducer(undefined, {
      type: types.SIGNUP_ERROR,
      error
    })).toEqual({
      ...initialState.auth,
      signupError: error
    })
  })

  it("should remove signup errors and set confirmed signup state if signup is successful", () => {
    expect(authReducer(undefined, {
      type: types.SIGNUP_SUCCESS
    })).toEqual({
      ...initialState.auth,
      signupError: null,
      createdUser: true
    })
  })

  it("should reset createdUser to false, on signup request", () => {
    expect(authReducer(undefined, {
      type: types.SIGNUP_REQUEST
    })).toEqual({
      ...initialState.auth,
      createdUser: false
    })
  })
})