import * as types from "./actionTypes";
import * as mapBoxApi from "../../api/mapBoxApi";
import * as navigatorApi from "../../api/navigatorApi";

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

export function getCurrentPositionRequest(){
  return {
    type: types.GET_CURRENT_POSITION_REQUEST
  }
}

export function getCurrentPositionSuccess(coords){
  return {
    type: types.GET_CURRENT_POSITION_SUCCESS,
    coords
  }
}

export function getCurrentPositionError(){
  return {
    type: types.GET_CURRENT_POSITION_ERROR
  }
}

export function getCurrentLocationNameSuccess(location){
  return {
    type: types.GET_CURRENT_LOCATION_NAME_SUCCESS,
    location
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

export function getCurrentPosition() {
  return function (dispatch) {
    dispatch(getCurrentPositionRequest())
    return (
      navigatorApi.getGeoPosition()
      .then((coords) => {
        dispatch(getCurrentPositionSuccess(coords))
        return mapBoxApi.convertCoordinatesToSearchLocation(coords.longitude, coords.latitude)
      }).then((location) => {
        dispatch(getCurrentLocationNameSuccess(location))
      }).catch(() => {
        dispatch(getCurrentPositionError())
      })
    )
  }
}