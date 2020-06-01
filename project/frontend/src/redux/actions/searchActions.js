import * as types from "./actionTypes";
import * as mapBoxApi from "../../api/mapBoxApi";

export function loadFeaturesSuccess(features) {
  return {
    type: types.LOAD_FEATURES_SUCCESS,
    features
  }
}

export function apiCallFeaturesStart(searchLocation) {
  return {
    type: types.API_CALL_FEATURES_START,
    searchLocation
  }
}

export function apiCallError() {
  return {
    type: types.API_CALL_ERROR
  }
}

export function loadFeatures(searchLocation) {
  return function (dispatch) {
    dispatch(apiCallFeaturesStart(searchLocation))
    return (
      mapBoxApi
      .convertSearchLocationToCoordinates(searchLocation)
      .then(features => {
        dispatch(loadFeaturesSuccess(features))
      }).catch(() => {
        dispatch(apiCallError())
      })
    )
  }
}