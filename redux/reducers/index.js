import { combineReducers } from "redux";
import auth from "./auth";
import signup from "./signup";
import profile from "./profile";
import profileErrors from "./profile/errors";
import linemanager from "./profile/linemanager";
import roles from "./roles";
import users from "./users";
import statuses from "./statuses";
import alerts from "./alerts";
import userRequests from "./requests/requestsReducer";
import userRequest from "./requests/requestReducer";

// function that contains all reducer objects.
const allReducers = combineReducers({
  auth,
  signup,
  profile,
  profileErrors,
  linemanager,
  roles,
  statuses,
  users,
  alerts,
  signup,
  userRequests,
  userRequest,
});

export default allReducers;
