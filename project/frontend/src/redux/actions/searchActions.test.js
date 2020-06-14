import * as searchActions from "./searchActions";
import * as types from "./actionTypes";
import {
  data
} from "../../mockAPIs/mapbox";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock('axios');

describe("Search action loadFeatures()", () => {

  afterEach(() => {
    jest.clearAllMocks();
    axios.get.mockClear();
  });

  it("should create LOAD_FEATURES_SUCCESS when loading features", () => {

    axios.get.mockResolvedValueOnce({
      status: 200,
      data
    })

    const searchLocation = "london";
    const expectedAction = [{
      type: types.API_CALL_FEATURES_START,
      searchLocation
    }, {
      type: types.LOAD_FEATURES_SUCCESS,
      features: data.features
    }];

    const store = mockStore({
      features: []
    });
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


describe("search actions getCurrentPosition ", () => {


  afterEach(() => {
    jest.clearAllMocks();
    axios.get.mockClear();
  });

  it("should create GET_CURRENT_POSITION_REQUEST when requesting geolocation", () => {

    axios.get.mockResolvedValueOnce({
      status: 200,
      data
    })

    global.navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
          latitude: 70,
          longitude: 90
        }
      })))
    };


    const expectedAction = [{
      type: types.GET_CURRENT_POSITION_REQUEST
    }, {
      type: types.GET_CURRENT_POSITION_SUCCESS,
      coords: {
        longitude: 90,
        latitude: 70
      }
    }, {
      type: types.GET_CURRENT_LOCATION_NAME_SUCCESS,
      location: "London, Greater London, England, United Kingdom"
    }];

    const store = mockStore({});
    return store.dispatch(searchActions.getCurrentPosition()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("should create GET_CURRENT_POSITION_ERROR when geolocation request is denied", () => {

    global.navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((error) => Promise.reject(error({})))
    };


    const expectedAction = [{
      type: types.GET_CURRENT_POSITION_REQUEST
    }, {
      type: types.GET_CURRENT_POSITION_ERROR
    }];

    const store = mockStore({});
    return store.dispatch(searchActions.getCurrentPosition()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

});