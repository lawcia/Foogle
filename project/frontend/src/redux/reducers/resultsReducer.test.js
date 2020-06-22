import resultsReducer from "./resultsReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {
  data
} from "../../mockAPIs/zomato";

describe("results reducer", () => {
  it("should return initial state", () => {
    expect(resultsReducer(undefined, {}))
      .toEqual(initialState.results)
  })

  it("state should contain a list of restaurants", () => {
    expect(resultsReducer(undefined, {
        type: types.LOAD_RESTAUTANTS_SUCCESS,
        restaurants: data.restaurants
      }))
      .toEqual({
        ...initialState.results,
        restaurants: data.restaurants
      })
  })
})