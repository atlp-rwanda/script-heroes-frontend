import { SET_ERROR, SET_SUCCESS } from "./types";

export const success = (payload) => (dispatch) =>
  dispatch({ type: SET_SUCCESS, payload });

export const resError = (payload) => (dispatch) =>
  dispatch({ type: SET_ERROR, payload });
