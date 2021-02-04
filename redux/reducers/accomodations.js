import {
  CREATE_ACCOMMODATION,
  SET_ACCOMMODATIONS_ERROR,
  GET_ACCOMMODATIONS_ERROR,
  GET_ACCOMMODATIONS,
  DELETE_ACCOMMODATION,
  DELETE_ACCOMMODATION_ERROR,
  UPDATE_ACCOMMODATION,
  UPDATE_ACCOMMODATION_ERROR,
} from "../actions/types";

const initialState = {
  accomodationsObj: [],
  accommodations: [],
  response: "",
  deleted: "",
  deleteErr: null,
  error: null,
  err: null,
  updated: "",
  updateErr: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOMMODATION:
      return {
        ...state,
        accommodations: action.payload,
        response: action.payload,
      };
    case SET_ACCOMMODATIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ACCOMMODATIONS:
      return {
        ...state,
        accomodationsObj: action.payload,
      };
    case GET_ACCOMMODATIONS_ERROR:
      return {
        ...state,
        err: action.payload.data,
      };
    case UPDATE_ACCOMMODATION:
      return {
        ...state,
        updated: action.payload.message,
      };
    case UPDATE_ACCOMMODATION_ERROR:
      return {
        ...state,
        updateErr: action.payload.data,
      };
    case DELETE_ACCOMMODATION:
      return {
        ...state,
        deleted: action.payload,
      };
    case DELETE_ACCOMMODATION_ERROR:
      return {
        ...state,
        deleteErr: action.payload.data,
      };
    default:
      return state;
  }
};
