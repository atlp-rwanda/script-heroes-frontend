import {GET_REQUESTS, GET_REQUESTS_ERROR} from '../actions/types'

const initialState = {
  message: "",
  requests: [],
  error: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        message: action.payload.message,
        requests: action.payload.directRequests,
        isLoading: false,
      };
    case GET_REQUESTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};