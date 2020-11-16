import {
  GET_ROLES,
  CREATE_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE,
} from "../actions/types";

const initialState = {
  roles: [],
  msg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload.roles,
        msg: action.payload.message,
      };

    case CREATE_ROLE:
      return {
        ...state,
        roles: [...state.roles, action.payload.role],
        msg: action.payload.message,
      };

    case UPDATE_ROLE:
      const { id } = action.payload.role;
      const updated = state.roles.map((role) => {
        if (role.id === id) {
          return { ...action.payload.role };
        } else return role;
      });

      return {
        roles: updated,
        msg: action.payload.message,
      };

    case DELETE_ROLE:
      const remains = state.roles.filter((role) => role.id !== action.id);
      return {
        roles: remains,
        msg: action.payload.message,
      };
    default:
      return state;
  }
};
