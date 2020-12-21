import {
  DECISION_LOADING,
  DECISION_ERROR,
  DECISION_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: null,
  error: null,
  decisionSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DECISION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DECISION_SUCCESS:
      return {
        ...state,
        loading: null,
        decisionSuccess: true,
      };

    case DECISION_ERROR:
      return {
        ...state,
        loading: null,
        error: action.error,
      };

    default:
      return state;
  }
};
