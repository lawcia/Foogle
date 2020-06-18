import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.LOAD_FEATURES_SUCCESS:
      return {
        ...state, features: action.features
      }
    case types.GET_CURRENT_POSITION_SUCCESS:
    case types.UPDATE_COORDINATES:
      return {
        ...state, longitude: action.coords.longitude, latitude: action.coords.latitude
      }
    case types.GET_CURRENT_LOCATION_NAME_SUCCESS:
      return {
          ...state, matchedLocation: action.location
      }
    case types.UPDATE_SEARCH_KEYWORD:
      return {
        ...state, keyword: action.keyword
      }
    default:
      return state;
  }
}