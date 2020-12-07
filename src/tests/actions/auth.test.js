import moxios from "moxios";
import http from "../../utils/axios";
import {
  SET_ERROR,
  SET_RESPONSE,
  SET_LOADING,
} from "../../../redux/actions/types";
import { signupAction, errorSetting } from "../../../redux/actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("Auth actions", () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  it("Should create an error state", () => {
    const error = "This is the error";
    expect(errorSetting(error)).toEqual({
      type: SET_ERROR,
      payload: error,
    });
  });
  it("Should signup successfully", async () => {
    const store = mockStore({});
    const message = "Your account has been successfully created";
    const user = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email@test.com",
      phoneNumber: "0780000000",
      password: "password1",
    };
    await moxios.stubRequest(
      `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
      {
        status: 201,
        message,
      }
    );
    store
      .dispatch(signupAction(user))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: SET_LOADING },
          { type: SET_RESPONSE, payload: message },
        ]);
      })
      .catch((error) => {
        errorSetting(error);
      });
  });
});
