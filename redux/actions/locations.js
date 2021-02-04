import { GET_LOCATIONS, GET_LOCATIONS_ERROR } from "./types";
import axios from "../../src/utils/axios";

export const getLocations = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/locations");
    dispatch({
      type: GET_LOCATIONS,
      payload: res.data,
    });
  } catch (error) {
    const { data } = error.response;
    dispatch({
      type: GET_LOCATIONS_ERROR,
      payload: error.response,
    });
  }
};
