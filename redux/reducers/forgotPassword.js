import * as actions from "../actions/types";

const initialState = {
  error: null,
  message: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_FORGOT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_FORGOT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actions.SET_FORGOT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
