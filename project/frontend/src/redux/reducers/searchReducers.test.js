import searchReducer from "./searchReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

describe("search reducer", () => {
  it("should render initial state", () => {
    expect(searchReducer(undefined, {}))
    .toEqual(initialState)
  })
})