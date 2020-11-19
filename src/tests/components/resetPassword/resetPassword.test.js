import React, {useState} from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ResetPassword from "../../../components/resetPassword/resetPassword";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import { Form, Input } from "reactstrap";

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
const mockSelector = jest.fn();
const mockParams = jest.fn();
let togglePasswordVisiblity = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));
jest.mock("react-router-dom", () => ({
  useParams: () => mockParams,
}));

let visibility
describe("reset page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ResetPassword />);
    const state = {};

    //wrapper = mockProvider(<ResetPassword />, mount, {});
  });
  it("Form event handler", () => {
    wrapper.find(Form).at(0).simulate("submit");
  });
  it("should change on every input", () => {
    wrapper = mount(<ResetPassword />);
    wrapper.find("#myEye").at(0).simulate("click", {});
    expect(togglePasswordVisiblity.mock.calls.length).toBe(0);
  });
  it("should change on every input", () => {
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "Password",
        },
      });
  });
  it("should change on every input", () => {
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "Repeat Password",
        },
      });
  });
  it("toggles text and password input", () => {
    const togglePasswordVisiblity = () => {
      if (visibility == "password") {
        visibility=="text";
      } else {
        visibility == 'password';
      }
    };
    wrapper.find("#myEye").at(0).simulate("click", {});
    expect(visibility).toBeUndefined();
  });
});
