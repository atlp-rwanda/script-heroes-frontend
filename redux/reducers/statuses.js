import {
  CREATING_ROLE,
  ASSIGNING_ROLE,
  DELETING_ROLE,
  UPDATING_ROLE,
  SET_RESOLVED,
} from "../actions/types";

const initialState = {
  creating: false,
  updating: false,
  assigning: false,
  deleting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATING_ROLE:
      return { ...state, creating: true };
    case ASSIGNING_ROLE:
      return { ...state, assigning: true };
    case DELETING_ROLE:
      return { ...state, deleting: true };
    case UPDATING_ROLE:
      return { ...state, updating: true };
    case SET_RESOLVED:
      return initialState;
    default:
      return state;
  }
};
