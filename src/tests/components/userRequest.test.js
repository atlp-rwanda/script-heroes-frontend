import thunk from "redux-thunk";
import React from "react";
import UserRequest from "../../../src/components/requests/single/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Table, FormGroup, Form } from "reactstrap";

describe("Request Reducers", () => {
  const initialState = {
    userRequest: {
      Accomodation: null,
      Trip: null,
      error: null,
      isLoading: true,
      message: "",
    },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it("Should render user Request  without an error", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <UserRequest match={{ params: { id: 1 } }} />
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
