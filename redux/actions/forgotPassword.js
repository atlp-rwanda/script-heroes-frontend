import * as actions from "./types";
import http from '../../src/utils/axios';

export const forgotAction = (data) => (dispatch) =>{
 dispatch({ type: actions.SET_FORGOT_LOADING });
    http.post(
      "/api/forgotPassword",
      data
    )

    .then((res) => {
      dispatch({
        type: actions.SET_FORGOT_SUCCESS,
        payload: res.data.message,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_FORGOT_ERROR,
        payload: error.response.data.err,
      });
    });
};
