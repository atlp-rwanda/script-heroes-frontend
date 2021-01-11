import {
  CREATE_ACCOMMODATION,
  SET_ACCOMMODATIONS_ERROR,
  GET_ACCOMMODATIONS,
  GET_ACCOMMODATIONS_ERROR,
  DELETE_ACCOMMODATION,
  DELETE_ACCOMMODATION_ERROR,
  UPDATE_ACCOMMODATION,
  UPDATE_ACCOMMODATION_ERROR,
} from "./types";
import axios from "../../src/utils/axios";

export const createAccommodation = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/accommodations", data);
    dispatch({
      type: CREATE_ACCOMMODATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ACCOMMODATIONS_ERROR,
      payload: error.response,
    });
  }
};

export const getAccommodation = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/accommodations");
    dispatch({
      type: GET_ACCOMMODATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ACCOMMODATIONS_ERROR,
      payload: error.response,
    });
  }
};

export const updateAccommodation = (data, id) => async (dispatch) => {
  try {
    const res = await axios.put("/api/accommodations/" + id, data);
    dispatch({
      type: UPDATE_ACCOMMODATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACCOMMODATION_ERROR,
      payload: error.response,
    });
  }
};

export const deleteAccommodation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/accommodations/" + id);
    dispatch({
      type: DELETE_ACCOMMODATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ACCOMMODATION_ERROR,
      payload: error.response,
    });
  }
};
