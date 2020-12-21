import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import toJSON from "enzyme-to-json";
import { Dropdown } from "reactstrap";
import Pagination from "react-bootstrap/Pagination";
import AdminRequests from "../../components/requests/adminRequests/AdminRequests";
import RequestsDecision from "../../components/requests/adminRequests/RequestsDecision";
import PaginationComponent from "../../components/requests/adminRequests/Pagination";

describe("Manage Requests", () => {
  const initialState = {
    adminRequests: {
      message: "",
      requests: [],
      error: null,
      isLoading: true,
    },
    requestDecision: {
      loading: null,
      error: null,
      decisionSuccess: false,
    },
  };
  let store;

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it("render the admin requests component", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <AdminRequests />
        </Router>
      </Provider>
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find({ "data-testid": "requests-a" })).not.toBeNull();
  });
  it("should render the request decision", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <RequestsDecision />
        </Router>
      </Provider>
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Dropdown).prop("isOpen")).toBe(false);
  });
  it("should render pagination", () => {
    let wrapper = mount(<PaginationComponent total={12} itemsPerPage={10} />);
    expect(wrapper).not.toBeNull();
  });

  it("should render the next previous page", () => {
    let onPageChage = jest.fn();
    let wrapper = mount(
      <PaginationComponent
        total={30}
        itemsPerPage={4}
        currentPage={1}
        onPageChage={onPageChage()}
      />
    );
    wrapper.find(Pagination.Prev).at(0).simulate("click");
    expect(onPageChage).toBeCalled();
  });
  it("should render the next page", () => {
    let wrapper = mount(<Pagination.Next />);
    wrapper.simulate("click");
    expect(wrapper).not.toBeNull();
  });
});
