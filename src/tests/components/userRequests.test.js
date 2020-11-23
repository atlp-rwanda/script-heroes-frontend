import thunk from "redux-thunk";
import React from "react";
import UserRequests from "../../../src/components/requests/all/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Table, FormGroup, Form } from "reactstrap";
import * as actions from "../../../redux/actions/requests/userRequests";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
describe("Request Reducers", () => {
  const initialState = {
    userRequests: {
      msg: "",
      trips: [],
      error: null,
      isLoading: true,
    },
  };

  const dummyRequests = {
    data: {
      trips: [
        {
          Request: {
            type: 2,
            status: "pending",
            createdAt: "2020-11-26T14:16:11.425Z",
          },
        },
      ],
    },
  };

  it("Should render user Request  without an error", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <UserRequests />
        </Router>
      </Provider>
    );

    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(FormGroup)).toHaveLength(1);
    expect(wrapper.find(".requests")).toHaveLength(1);
    expect(wrapper.find(".side-bar")).toHaveLength(1);
    expect(wrapper.find(".requests-wrapper")).toHaveLength(1);
  });
});
