import * as types from "./actionTypes";
import * as api from "../../api/zomatoApi";

export function loadRestuarantsSuccess(restaurants){
  return {
    type: types.LOAD_RESTAUTANTS_SUCCESS,
    restaurants
  }
}

export function loadRestuarantsRequest(){
  return {
    type: types.LOAD_RESTAUTANTS_REQUEST
  }
}

export function loadRestaurants(){
  return function (dispatch, getState) {
    const { latitude, longitude, keyword } = getState().search;
    dispatch(loadRestuarantsRequest())
    return (
      api.getRestaurants(latitude, longitude, keyword)
      .then(restaurants => dispatch(loadRestuarantsSuccess(restaurants)))
      )
  }
}