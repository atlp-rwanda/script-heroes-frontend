import { GET_USERS, ASSIGN_ROLE } from "../actions/types";

const initialState = {
  users: [],
  msg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    case ASSIGN_ROLE:
      return {
        ...state,
        users: action.payload.users,
        msg: action.payload.message,
      };
    default:
      return state;
  }
};
