import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { ForgotPassword, Success } from "../../../components/resetPassword/forgotPassword";
import Adapter from "enzyme-adapter-react-16";
import { Form, Input, Alert } from "reactstrap";
import mockProvider from "../../mockProvider";

Enzyme.configure({ adapter: new Adapter() });

describe("Forgot componet", () => {
  let wrapper;
  beforeEach(() => {
    const state = {
    };

    wrapper = mockProvider(<ForgotPassword />, mount);
  });
  it("tests text in header", () => {
    let text = wrapper.find("h1");
    expect(text.exists()).toBe(true);
  });
  it("Form event handler", () => {
    wrapper.find(Form).at(0).simulate("submit");
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
  it("should display alert message", () => {
    wrapper
      .find(Alert)
      .at(0).props('isOpen')
      });
      it("renders Success", () => {
        shallow(<Success/>)
      });
  });
