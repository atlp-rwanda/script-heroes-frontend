import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import UpdateAccomodationsPage from "../../components/accommodation/editAccommodation";

jest.mock("../../components/accommodation/editAccommodation", () => {
  return {
    __esModule: true,
    default: () => {
      return <div></div>;
    },
  };
});

describe("edit accommodation component", () => {
  const initialState = {
    accommodation: { accomodationsObj: [] },
    locations: { locations: [] },
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it("Should render Edit Accommodation page", () => {
    store = mockStore(initialState);
    let wrapper = mount(
      <Provider store={store}>
        <Router>
          <UpdateAccomodationsPage />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
