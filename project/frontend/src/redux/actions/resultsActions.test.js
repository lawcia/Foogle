import * as resultsActions from "./resultsActions";
import * as types from "./actionTypes";
import {
  data
} from "../../mockAPIs/zomato";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
jest.mock('axios');

describe('results actions loadRestaurants', () => {
  it('should create LOAD_RESTAUTANTS_SUCCESS and LOAD_RESTAUTANTS_REQUEST actions when loading restaurants', () => {
    axios.get.mockResolvedValueOnce({data})

    const expectedAction = [{
      type: types.LOAD_RESTAUTANTS_REQUEST
    },{
      type: types.LOAD_RESTAUTANTS_SUCCESS,
      restaurants: data.restaurants
    }];

    const store = mockStore({
      searchReducer: {
        matchedLocation: '',
        latitude: '',
        longitude: '',
        keyword: '',
      }
    });
    return store.dispatch(resultsActions.loadRestaurants()).then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
})