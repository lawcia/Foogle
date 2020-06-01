import * as searchActions from "./searchActions";
import * as types from "./actionTypes";
import { data } from "../../mockAPIs/mapbox";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock("axios");

describe("Search action loadFeatures()", () => {

  it("should create LOAD_FEATURES_SUCCESS when loading features", () => {
    
    const mockAxios = axios.get.mockImplementation(() => Promise.resolve(data))
    
    const expectedAction = [{ type: types.LOAD_FEATURES_SUCCESS, payload: data.features }];

    const store = mockStore({ features: [] });
    return store.dispatch(searchActions.loadFeatures("london")).then(() => {
      expect(mockAxios).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedAction);
    });
    
  });

  it("should create API_CALL_ERROR when api call fails", () => {

    const expectedAction = {
      type: types.API_CALL_ERROR
    };

    const action = searchActions.apiCallError();

    expect(action).toEqual(expectedAction);
  })
});