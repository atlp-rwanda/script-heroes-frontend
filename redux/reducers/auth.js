import { SET_ERROR, SET_AUTH_STATUS } from "../actions/types";

const initialState = {
  error: null,
  isAuthenticated: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
