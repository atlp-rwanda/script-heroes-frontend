import { SET_ERROR, SET_LOADING, SET_RESPONSE } from "../actions/types";

const initialState = {
  loading: null,
  error: null,
  response: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: null,
      };

    case SET_RESPONSE:
      return {
        ...state,
        response: action.payload,
        loading: null,
      };

    default:
      return state;
  }
};
