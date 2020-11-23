import http from "../../../src/utils/axios";
import { types } from "./types";

export const fetchRequest = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/api/trips/${id}`);

    dispatch({ type: types.FETCH_REQUEST_SUCCESS, payload: res.data });
  } catch (error) {
    if (error.response.data.error) {
      dispatch({
        type: types.FETCH_REQUEST_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: types.FETCH_REQUEST_ERROR,
        payload: error.response.statusText,
      });
    }
  }
};

export const fetchRequests = () => async (dispatch) => {
  try {
    const res = await http.get("/api/trips");
    dispatch({ type: types.FETCH_REQUESTS_SUCCESS, payload: res.data });
  } catch (error) {
    if (error.response.data.message) {
      dispatch({
        type: types.FETCH_REQUESTS_ERROR,
        payload: error.response.data.message,
      });
    } else if (error.response.data.error) {
      dispatch({
        type: types.FETCH_REQUESTS_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: types.FETCH_REQUESTS_ERROR,
        payload: error.response.statusText,
      });
    }
  }
};
