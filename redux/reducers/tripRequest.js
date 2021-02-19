import {
  CREATE_REQUEST,
  CREATE_REQUEST_ERROR,
  GET_USER_REQUEST,
  GET_USER_REQUEST_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_REQUEST_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_REQUEST_ERROR,
} from "../actions/types";

const initialState = {
  trpRequestObj: [],
  requestsObj: [],
  error: "",
  response: "",
  err: "",
  deleted: "",
  deleteErr: "",
  updated: "",
  updateErr: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        trpRequestObj: action.payload,
        response: action.payload.message,
      };
    case CREATE_REQUEST_ERROR:
      return {
        ...state,
        err: action.payload.data.message,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        requestsObj: action.payload.Trips,
      };
    case GET_USER_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updated: action.payload.message,
      };
    case UPDATE_USER_REQUEST_ERROR:
      return {
        ...state,
        updateErr: action.payload.data.message,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        deleted: action.payload.message,
      };
    case DELETE_USER_REQUEST_ERROR:
      return {
        ...state,
        deleteErr: action.payload.data.message,
      };
    default:
      return state;
  }
};
