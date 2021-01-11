import { GET_LOCATIONS, GET_LOCATIONS_ERROR } from "../actions/types";

const initialState = {
  locations: [],
  msg: "",
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
        msg: action.payload.message,
      };
    case GET_LOCATIONS_ERROR:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
