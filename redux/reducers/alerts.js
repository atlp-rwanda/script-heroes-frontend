import { SET_ERROR, SET_SUCCESS } from "../actions/types";

const initialState = {
  message: "",
  color: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS:
      return { ...state, message: action.payload.message, color: "success" };
    case SET_ERROR:
      return { ...state, message: action.payload.error, color: "danger" };
    default:
      return state;
  }
};
