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
        ...initialState,
        username,
        isAuthenticated: true 
      })
  })


})