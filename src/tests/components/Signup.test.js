import { describe } from "@jest/globals";
import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Signup from "../../Views/Signup";
import { Alert, Button, Form, Input } from "reactstrap";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import thunk from "redux-thunk";

describe("Signup", () => {
  const initialState = { signup: { loading: false, error: "", response: "" } };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it("Should render signup page", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <Signup />
        </Router>
      </Provider>
    );
    expect(wrapper.find(".signup")).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it("Should submit data to actions", () => {
    const preventDefault = jest.fn();

    let wrapper;
    store = mockStore(initialState);
    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <Router>
            <Signup />
          </Router>
        </Provider>
      );
    });
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "email@test.com" },
      { name: "phoneNumber", value: "0789000000" },
      { name: "password", value: "Password1" },
      { name: "confirmPassword", value: "Password1" },
    ];
    let inputs = wrapper.find(Input);
    for (let index = 0; index < inputs.length; index++) {
      inputs.at(index).simulate("change", {
        target: {
          name: user[index].name,
          value: user[index].value,
        },
      });
    }

    wrapper.find(Form).at(0).simulate("submit", { preventDefault });
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
  it("Should not submit data with errors", () => {
    const preventDefault = jest.fn();

    let wrapper;
    store = mockStore(initialState);
    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <Router>
            <Signup />
          </Router>
        </Provider>
      );
    });
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "email@test.com" },
      { name: "phoneNumber", value: "0789000000" },
      { name: "password", value: "Password1" },
      { name: "confirmPassword", value: "wrongPassword" },
    ];
    let inputs = wrapper.find(Input);
    for (let index = 0; index < inputs.length; index++) {
      inputs.at(index).simulate("change", {
        target: {
          name: user[index].name,
          value: user[index].value,
        },
      });
    }

    wrapper.find(Form).at(0).simulate("submit", { preventDefault });
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
});
