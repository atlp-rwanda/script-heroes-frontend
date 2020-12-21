import { types } from "../../actions/requests/types";

const initialState = {
  message: "",
  Trip: null,
  error: null,
  Accomodation: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        Trip: action.payload.Trip,
        Accomodation: action.payload.Trip.Accomodation,
        isLoading: false,
      };
    case types.FETCH_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
