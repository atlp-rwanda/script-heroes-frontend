import { types } from './types';

export const returnErrors = (msg, status) => {
  return {
    type: types.GET_ERRORS,
    payload: { msg, status },
  };
};

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS,
  };
};
