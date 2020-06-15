import searchReducer from "./searchReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {
  data
} from "../../mockAPIs/mapbox";

describe("search reducer", () => {
  it("should return initial state", () => {
    expect(searchReducer(undefined, {}))
      .toEqual(initialState)
  })

  it("should return state with features data", () => {
    expect(searchReducer(undefined, {
        type: types.LOAD_FEATURES_SUCCESS,
        features: data.features
      }))
      .toEqual({
        ...initialState,
        features: data.features
      })
  })

  it("should return state with coordinates", () => {
    const coords = {
      longitude: 60,
      latitude: 80
    }
    expect(searchReducer(undefined, {
      type: types.GET_CURRENT_POSITION_SUCCESS,
      coords
    })).toEqual({
      ...initialState,
      longitude: coords.longitude,
      latitude: coords.latitude
    })
  })

  it("should return state with location", () => {
    const placeName = "London";

    expect(searchReducer(undefined, {
      type: types.GET_CURRENT_LOCATION_NAME_SUCCESS,
      location: placeName
    })).toEqual({
      ...initialState,
      matchedLocation: placeName
    })
  })

  it("should return state with updated coordinates", () => {
    const coords = {
      longitude: 70,
      latitude: 70
    };

    expect(searchReducer(undefined, {
      type: types.UPDATE_COORDINATES,
      coords
    })).toEqual({
      ...initialState,
      longitude: coords.longitude, 
      latitude: coords.latitude
    })
  })
})