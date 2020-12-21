import * as actions from "./types";
import http from '../../src/utils/axios';

export const resetAction = (data) => (dispatch) => {
    let token = data.token.token
    let password = data.password
    let confirmPassword = data.confirmPassword
    let resetData = {password, confirmPassword}
  dispatch({ type: actions.SET_RESET_LOADING });
  http
    .post(`/api/resetPassword/${token}`, resetData)
    .then((res) => {
      dispatch({
        type: actions.SET_RESET_SUCCESS,
        payload: res.data.message,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.SET_RESET_INVALID,
        payload: error.response.data.err,
      });
    });
};
