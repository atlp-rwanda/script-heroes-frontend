import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";

import Login from "../../components/Login";

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe("Login page", () => {
  let wrapper;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<Login />);
    });
  });
  it("Should render with no errors", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
