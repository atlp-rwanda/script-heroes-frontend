import { types } from './types';
import http from '../../../src/utils/axios';
import { returnErrors } from '../profile/errors';

export const getAccommodations = () => async (dispatch) => {
  try {
    const res = await http.get('/api/accommodations');
    dispatch({
      type: types.GET_ACCOMMODATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
