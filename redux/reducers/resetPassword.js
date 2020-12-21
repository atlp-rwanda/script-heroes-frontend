import * as actions from "../actions/types";

const initialState = {
  error: null,
  message: null,
  err: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_RESET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_RESET_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case actions.SET_RESET_INVALID:
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
