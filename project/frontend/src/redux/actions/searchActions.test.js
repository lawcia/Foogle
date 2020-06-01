import * as searchActions from "./searchActions";
import * as types from "./actionTypes";
import { data } from "../../mockAPIs/mapbox.data";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock("axios");

describe("Search actions", () => {
  it("should create LOAD_FEATURES_SUCCESS when loading features", () => {
    
    axios.get.mockImplementation(() => Promise.resolve(data))

    const expectedAction = [
      { type: types.LOAD_FEATURES_SUCCESS, payload: data.features }
    ];

    const store = mockStore({ features: [] });
    return store.dispatch(searchActions.loadFeatures("london")).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});