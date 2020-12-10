import {
  CREATING_ROLE,
  ASSIGNING_ROLE,
  DELETING_ROLE,
  UPDATING_ROLE,
  SET_RESOLVED,
} from "./types";

export const creating = () => (dispatch) => dispatch({ type: CREATING_ROLE });

export const updating = () => (dispatch) => dispatch({ type: UPDATING_ROLE });

export const assigning = () => (dispatch) => dispatch({ type: ASSIGNING_ROLE });

export const deleting = () => (dispatch) => dispatch({ type: DELETING_ROLE });

export const resolved = () => (dispatch) => dispatch({ type: SET_RESOLVED });
