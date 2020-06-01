import * as types from "./actionTypes";
import * as mapBoxApi from "../../api/mapBoxApi";

export function loadFeaturesSuccess(features) {
  return {
    type: types.LOAD_FEATURES_SUCCESS,
    payload: features
  }
}

export function loadFeatures(searchLocation) {
  return function (dispatch) {
    return (
      mapBoxApi
      .convertSearchLocationToCoordinates(searchLocation).then(response => {
        dispatch(loadFeaturesSuccess(response.data.features))
      }).catch(error => console.log(error))
    )
  }
}