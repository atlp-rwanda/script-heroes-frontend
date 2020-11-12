import { types } from './types';
import { returnErrors } from './errors';
import http from '../../../src/utils/axios';

export const getProfile = () => async (dispatch) => {
  try {
    const res = await http.get('/api/profile');
    dispatch({
      type: types.GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const completeProfile = (profile) => async (dispatch) => {
  try {
    const res = await http.put('/api/profile/complete', profile);
    dispatch({
      type: types.COMPLETE_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  try {
    const res = await http.put('/api/profile/update', profile);

    dispatch({
      type: types.UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
