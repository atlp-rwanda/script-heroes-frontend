import { types } from '../../actions/profile/types';

const initialState = {
  error: '',
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        error: action.payload.msg.error,
        status: action.payload.status,
      };
    case types.CLEAR_ERRORS:
      return {
        error: '',
        status: null,
      };
    default:
      return state;
  }
};
