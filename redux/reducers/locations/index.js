import { types } from '../../actions/locations/types';

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
      };
    default:
      return state;
  }
};
