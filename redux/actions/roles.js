import { GET_ROLES, CREATE_ROLE, DELETE_ROLE, UPDATE_ROLE } from "./types";
import { creating, updating, deleting, resolved } from "./statuses";
import { success, resError } from "./alerts";
import axiosBase from "../../src/utils/axios";

export const getRoles = () => async (dispatch) => {
  try {
    const res = await axiosBase.get("/api/role");
    dispatch({
      type: GET_ROLES,
      payload: res.data,
    });
    dispatch(success({ message: res.data.message }));
  } catch (error) {
    const { data } = error.response;
    dispatch(resError({ error: data.error || data.message || data.msg }));
  }
};

export const createRole = (role) => async (dispatch) => {
  dispatch(creating());
  try {
    const res = await axiosBase.post("/api/role/register", role);
    dispatch({
      type: CREATE_ROLE,
      payload: res.data,
    });
    dispatch(resolved());
    dispatch(success({ message: res.data.msg }));
  } catch (error) {
    dispatch(resolved());
    dispatch(resError({ error: error.response.data.error }));
  }
};

export const updateRole = (id, role) => async (dispatch) => {
  dispatch(updating());
  try {
    const res = await axiosBase.patch(`/api/role/${id}`, role);
    dispatch({
      type: UPDATE_ROLE,
      payload: res.data,
    });
    dispatch(resolved());
    dispatch(success({ message: res.data.message }));
  } catch (error) {
    dispatch(resolved());
    dispatch(resError({ error: error.response.data.error }));
  }
};

export const deleteRole = (role) => async (dispatch) => {
  dispatch(deleting());
  try {
    const res = await axiosBase.delete(`/api/role/${role.id}`);
    dispatch({
      type: DELETE_ROLE,
      payload: res.data,
      id: role.id,
    });
    dispatch(resolved());
    dispatch(success({ message: res.data.message }));
  } catch (error) {
    dispatch(resolved());
    dispatch(resError({ error: error.response.data.error }));
  }
};
