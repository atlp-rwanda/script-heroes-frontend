import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "reactstrap";


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
  it("should change on every input", () => {
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "some email",
        },
      });
  });
  it("should change on every input", () => {
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "some password",
        },
      });
  });
});
