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

    const loginDetails = {
      username: "user1",
      password: "password123&*"
    }

    axios.post.mockResolvedValueOnce({
      data: {
        username: loginDetails.username,
        token: "sampletoken"
      }
    });

    global.localStorage = {
      setItem: jest.fn()
    };

    const expectedAction = [{
        type: types.LOGIN_REQUEST,
        data: loginDetails
      },
      {
        type: types.LOGIN_SUCCESS,
        username: loginDetails.username
      }
    ]

    const store = mockStore({});

    return store.dispatch(authActions.loginUser(loginDetails)).then(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("should create LOGIN_ERROR when user login fails", () => {

    const error = "Something went wrong"

    const expectedAction = {
      type: types.LOGIN_ERROR,
      error
    };

    const action = authActions.loginUserError(error);

    expect(action).toEqual(expectedAction);
  })

  it("should create LOGIN_ERROR and LOGIN_REQUEST when api call fails", () => {

    const loginDetails = {
      username: "user1",
      password: "password123&*"
    }

    const error = {
      response: {
        data: "Something went wrong"
      }
    }

    axios.post.mockImplementationOnce(() => Promise.reject(error));

    global.localStorage = {
      setItem: jest.fn()
    };

    const expectedAction = [{
        type: types.LOGIN_REQUEST,
        data: loginDetails
      },
      {
        type: types.LOGIN_ERROR,
        error
      }
    ]

    const store = mockStore({});

    return store.dispatch(authActions.loginUser(loginDetails)).then(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(store.getActions()).toEqual(expectedAction);
    });
  });



})