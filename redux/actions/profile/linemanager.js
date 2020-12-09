import { types } from './types';
import { returnErrors } from './errors';
import http from '../../../src/utils/axios';

export const getLineManagers = () => async (dispatch) => {
  try {
    const res = await http.get('/api/profile/managers');
    dispatch({
      type: types.GET_MANAGER,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
