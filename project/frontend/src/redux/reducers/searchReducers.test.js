import searchReducer from "./searchReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { data } from "../../mockAPIs/mapbox";

describe("search reducer", () => {
  it("should return initial state", () => {
    expect(searchReducer(undefined, {}))
    .toEqual(initialState)
  })

  it("should return state with features data", () => {
    expect(searchReducer(undefined, types.LOAD_FEATURES_SUCCESS))
    .toEqual({...initialState, features: data.features})
  })
})