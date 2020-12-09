import { types } from '../../actions/profile/types';

const initialState = {
  managers: [],
  msg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MANAGER:
      return {
        ...state,
        managers: action.payload.Managers,
        msg: action.payload.message,
      };

    default:
      return state;
  }
};
