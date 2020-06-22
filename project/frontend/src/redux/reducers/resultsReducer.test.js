import resultsReducer from "./resultsReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

describe("results reducer", () => {
  it("should return initial state", () => {
    expect(resultsReducer(undefined, {}))
      .toEqual(initialState.results)
  })
})