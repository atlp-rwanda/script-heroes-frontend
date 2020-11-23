import thunk from "redux-thunk";
import React from "react";
import UserRequests from "../../../src/components/requests/all/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Table, FormGroup, Form, Alert } from "reactstrap";
import * as actions from "../../../redux/actions/requests/userRequests";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
let wrapper;
describe("Request Reducers", () => {
  //   msg: "",
  //   trips: [],
  //   error: null,
  //   isLoading: true,
  // },
  const initialState = {
    userRequests: {
      msg: "",
      error: null,
      isLoading: false,
      trips: [
        {
          id: 1,
          reason: "Research",
          createdAt: "2020-11-26T14:16:11.425Z",
          Request: {
            type: 2,
            status: "pending",
            RequestType: {
              type: "OneWay",
            },
          },
        },
      ],
    },
  };

  const errorState = {
    userRequests: {
      msg: "",
      error: "error occured",
      isLoading: false,
      trips: [],
    },
  };

  it("Should render user Request  without an error", () => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <UserRequests />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(FormGroup)).toHaveLength(1);
    expect(wrapper.find(".requests")).toHaveLength(1);
    expect(wrapper.find(".side-bar")).toHaveLength(1);
    expect(wrapper.find(".requests-wrapper")).toHaveLength(1);
    expect(wrapper.find(".td-actions")).toHaveLength(1);
  });
  it("Should not render user Requests when there are errors", () => {
    store = mockStore(errorState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <UserRequests />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Alert)).toHaveLength(1);
  });
});
