import http from "../../src/utils/axios";
import { GET_REQUESTS, GET_REQUESTS_ERROR} from "./types";

export const adminRequests = () => async(dispatch) => {
  try {
    const res = await http.get(`/api/request/manager`);
    //console.log("The response is:",res.data)
    dispatch({ 
      type: GET_REQUESTS, 
      payload: res.data 
    });
  } catch (error) {
    if (error.response.data.error) {
      dispatch({
        type: GET_REQUESTS_ERROR,
        payload: error.response.data.error,
      });
    } else {
      dispatch({
        type: GET_REQUESTS_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};
