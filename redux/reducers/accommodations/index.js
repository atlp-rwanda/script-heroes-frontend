import { types } from '../../actions/accommodations/types';

const initialState = {
  accommodations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload,
      };
    default:
      return state;
  }
};
