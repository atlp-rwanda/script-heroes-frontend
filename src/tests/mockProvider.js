import { createStore, applyMiddleware } from "redux";
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducer from "../../redux/reducers/index";

const mockProvider = (component, testMode, initialState = {}) => {
  const store = createStore(allReducer, initialState, applyMiddleware(thunk));
  return testMode(<Provider store={store}>{component}</Provider>);
};

export default mockProvider;
