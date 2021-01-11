import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import AddAccomodation from "../../components/accommodation/addAccommodation";
import { Form, Input, Alert } from "reactstrap";
describe("add accommodation component", () => {
  const initialState = {
    accommodation: { accomodationsObj: [] },
    locations: { locations: [] },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it("Should render Accommodation page", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Input)).toHaveLength(5);
  });
  it("Should render Accommodation page with inputs", () => {
    store = mockStore(initialState);
    const isValid = jest.fn();
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    wrapper
      .find(Input)
      .at(0)
      .simulate(
        "blur",
        { isValid },
        {
          target: {
            name: "facilityName",
            value: "facilityName",
          },
        }
      );
    expect(wrapper.find(Input).at(0).hasClass("is-invalid")).toBeFalsy();
  });
  it("Should inputs that responds on changes", () => {
    store = mockStore(initialState);
    const isValid = jest.fn();
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          name: "facilityName",
          value: "facilityName",
        },
      });
    expect(wrapper.find(Input).at(0).prop("value")).toEqual("facilityName");
  });
  it("Should render a component with the form", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Form)).toHaveLength(2);
  });
  it("Should allow the form to submit once clicked on", () => {
    store = mockStore(initialState);
    const preventDefault = jest.fn();
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    wrapper.find(Form).at(1).simulate("submit", { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
  it("Should show response it response state is not null", () => {
    const state = {
      accommodation: {
        accomodationsObj: [],
        error: {
          data: {
            error: "This is the error",
          },
        },
        response: {
          message: "This is the response",
        },
      },
      locations: { locations: [] },
    };
    store = mockStore(state);
    const preventDefault = jest.fn();
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    wrapper.find(Form).at(1).simulate("submit", { preventDefault });
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
  it("Should show locations if any", () => {
    const state = {
      accommodation: {
        accomodationsObj: [],
      },
      locations: { locations: [{ id: 1, country: "country" }] },
    };
    store = mockStore(state);
    const preventDefault = jest.fn();
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AddAccomodation />
        </Router>
      </Provider>
    );
    wrapper.find(Form).at(1).simulate("submit", { preventDefault });
    expect(wrapper.find("option")).toHaveLength(3);
  });
});
