import * as searchActions from "./searchActions";
import * as types from "./actionTypes";
import { data } from "../../mockAPIs/mapbox";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import mock


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock("axios");

describe("Search action loadFeatures()", () => {

   afterEach(() => {
     jest.mock.restore();
   })

  it("should create LOAD_FEATURES_SUCCESS when loading features", () => {
    
    axios.get.mockResolvedValue({data});
    
    const searchLocation = "london";
    const expectedAction = [{
      type: types.API_CALL_FEATURES_START, searchLocation
    },{ 
      type: types.LOAD_FEATURES_SUCCESS, features: data.features 
    }];

    const store = mockStore({ features: [] });
    return store.dispatch(searchActions.loadFeatures(searchLocation)).then(() => {
      expect(axios.get).toHaveBeenCalled();
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