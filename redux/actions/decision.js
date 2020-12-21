import http from "../../src/utils/axios";
import {
  DECISION_LOADING,
  DECISION_ERROR,
  DECISION_SUCCESS,
} from "../actions/types";

export default (id, decision) => async (dispatch) => {
  try {
    dispatch({ type: DECISION_LOADING });
    const res = await http.put(`/api/request/manager/${id}/${decision}`);
    dispatch({ type: DECISION_SUCCESS });
  } catch (err) {
    const error =
      err.response.data.message ||
      err.response.data.error ||
      err.response.data.msg;
    dispatch({ type: DECISION_ERROR, error });
  }
};
