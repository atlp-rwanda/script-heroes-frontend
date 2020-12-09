import { types } from '../../actions/profile/types';

const initialState = {
  profile: {},
  msg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE:
    case types.COMPLETE_PROFILE:
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
        msg: action.payload.msg,
      };
    default:
      return state;
  }
};
