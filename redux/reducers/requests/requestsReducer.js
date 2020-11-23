import { types } from "../../actions/requests/types";

const initialState = {
  msg: "",
  trips: [],
  error: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        msg: action.payload.msg,
        trips: action.payload.trips,
        isLoading: false,
      };
    case types.FETCH_REQUESTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
