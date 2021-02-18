import {
  CREATE_REQUEST,
  CREATE_REQUEST_ERROR,
  GET_USER_REQUEST,
  GET_USER_REQUEST_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_REQUEST_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_REQUEST_ERROR,
} from "./types";
import axios from "../../src/utils/axios";

export const CreateTripRequest = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/trips/oneway", data);
    dispatch({
      type: CREATE_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REQUEST_ERROR,
      payload: error.response,
    });
  }
};

export const GetUserTripRequests = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/trips/oneway");
    dispatch({
      type: GET_USER_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_REQUEST_ERROR,
      payload: error.response,
    });
  }
};

export const UpdateUserTripRequest = (data, id) => async (dispatch) => {
  try {
    const res = await axios.patch("/api/trips/oneway/" + id, data);
    dispatch({
      type: UPDATE_USER_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_REQUEST_ERROR,
      payload: error.response,
    });
  }
};

export const DeleteUserTripRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/trips/oneway/" + id);
    dispatch({
      type: DELETE_USER_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_REQUEST_ERROR,
      payload: error.response,
    });
  }
};
