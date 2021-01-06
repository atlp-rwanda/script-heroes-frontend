import { types } from './types';
import http from '../../../src/utils/axios';
import { returnErrors } from '../profile/errors';

export const getLocations = () => async (dispatch) => {
  try {
    const res = await http.get('/api/locations');
    dispatch({
      type: types.GET_LOCATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
