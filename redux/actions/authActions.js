import http from "../../src/utils/axios";
import { SET_RESPONSE, SET_LOADING, SET_ERROR } from "./types";

export const signupAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await http.post("/auth/signup", data);
    dispatch({
      type: SET_RESPONSE,
      payload: res.data.msg || res.data.message,
    });
  } catch (err) {
    const error = err.response.data.message || err.response.data.error;
    dispatch(errorSetting(error));
  }
};

export const errorSetting = (data) => ({
  type: SET_ERROR,
  payload: data,
});
