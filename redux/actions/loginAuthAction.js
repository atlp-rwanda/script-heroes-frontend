import http from "../../src/utils/axios";
import { SET_RESPONSE, SET_LOADING, SET_ERROR } from "./types";

const localStorage = window.localStorage;
export const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await http.post("/api/auth/login", data);
    localStorage.setItem("x-auth-token", res.data.token);
    localStorage.setItem("isAuthenticated", true);

    dispatch({
      type: SET_RESPONSE,
      payload: res.data.msg || res.data.message,
    });
  } catch (err) {
    const error = err.response.data.message || err.response.data.error;
    localStorage.setItem("isAuthenticated", false);

    dispatch(errorSetting(error));
  }
};

export const errorSetting = (data) => ({
  type: SET_ERROR,
  payload: data,
});
