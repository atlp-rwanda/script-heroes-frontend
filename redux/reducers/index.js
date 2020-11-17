import { combineReducers } from "redux";
import auth from "./auth";

// function that contains all reducer objects.
const allReducers = combineReducers({
  auth,
});

export default allReducers;
