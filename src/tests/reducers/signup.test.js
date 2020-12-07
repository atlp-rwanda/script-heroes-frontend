import {
  SET_ERROR,
  SET_RESPONSE,
  SET_LOADING,
} from "../../../redux/actions/types";
import signup from "../../../redux/reducers/signup";

describe("Reducers", () => {
  it("should return empty state when no state changed", () => {
    expect(signup(undefined, {})).toEqual({
      error: null,
      loading: null,
      response: null,
    });
  });
  it("should set loading to true when a form is submitted", () => {
    expect(signup({}, { type: SET_LOADING })).toEqual({
      loading: true,
    });
  });
  it("should set error if error occured during submitting", () => {
    const error = "This is the error";
    expect(signup({}, { type: SET_ERROR, payload: error })).toEqual({
      error,
      loading: null,
    });
  });
  it("Should set response if submitted correctly", () => {
    const response = "This is the response";
    expect(signup({}, { type: SET_RESPONSE, payload: response })).toEqual({
      response,
      loading: null,
    });
  });
});
