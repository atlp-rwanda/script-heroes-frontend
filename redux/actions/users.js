import { GET_USERS, ASSIGN_ROLE, SET_ERROR } from "./types";
import { assigning, resolved } from "./statuses";
import { success, resError } from "./alerts";
import axiosBase from "../axiosBase";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axiosBase.get("/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    const { data } = error.response;
    dispatch(resError({ error: data.error || data.message || data.msg }));
  }
};

export const assignRole = ({ userRole, email }) => async (dispatch) => {
  dispatch(assigning());
  try {
    const res = await axiosBase.post("/role/assign", {
      userRole,
      email,
    });
    const usersRes = await axiosBase.get("/users");

    dispatch({
      type: ASSIGN_ROLE,
      payload: { users: usersRes.data.users, msg: res.data.message },
    });
    dispatch(success({ message: res.data.msg }));
    dispatch(resolved());
  } catch (error) {
    dispatch(resError({ error: error.response.data?.error }));
    dispatch(resolved());
  }
};
