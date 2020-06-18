import * as authActions from "./authActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import axios from "axios";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.mock("axios");


describe("Authorisation actions loginUser()", () => {

  afterEach(() => {
    jest.clearAllMocks();
    axios.get.mockClear();
  });

  it("should create LOGIN_SUCCESS and LOGIN_REQUEST when logging in user", () => {

    const username = "user1"
    const password = "password123&*"

    axios.post.mockResolvedValueOnce({
      data: {
        username,
        token: "sampletoken"
      }
    });

    global.localStorage = {
      setItem: jest.fn()
    };

    const expectedAction = [{
        type: types.LOGIN_REQUEST,
        data: {
          username,
          password
        }
      },
      {
        type: types.LOGIN_SUCCESS
      }
    ]

    const store = mockStore({});

    return store.dispatch(authActions.loadFeatures({
      username,
      password
    })).then(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

})