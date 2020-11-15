import { combineReducers } from "redux";
import auth from "./auth";
import signup from "./signup";

//function that contains all reducer objects.
const allReducers = combineReducers({ auth, signup });

export default allReducers;
