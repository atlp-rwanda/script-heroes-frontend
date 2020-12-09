import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';
import profile from './profile';
import profileErrors from './profile/errors';
import linemanager from './profile/linemanager';

// function that contains all reducer objects.
const allReducers = combineReducers({
  auth,
  signup,
  profile,
  profileErrors,
  linemanager,
});

export default allReducers;
