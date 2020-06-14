import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FEATURES_SUCCESS:
      return {
        ...state, features: action.features
      }
      case types.GET_CURRENT_POSITION_SUCCESS:
        return {
          ...state, longitude: action.coords.longitude, latitude: action.coords.latitude
        }
        default:
          return state;
  }
}