import { describe } from "@jest/globals";
import React from "react";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import SignupForm from "../../components/SignupForm";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";

describe("Signup Form", () => {
  const initialState = {
    signup: { loading: null, error: null, response: null },
  };

  it("Should render a form with inputs", () => {
    let wrapper = shallow(<SignupForm />);
    expect(wrapper.find(Input)).toHaveLength(6);
  });

  it("Should render a form with button", () => {
    let wrapper = shallow(<SignupForm />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("Should respond to change on first name input", () => {
    const wrapper = shallow(<SignupForm />);
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          name: "firstName",
          value: "myFirstName",
        },
      });
    expect(wrapper.find(Input).at(0).prop("value")).toEqual("myFirstName");
  });

  it("Should show error if invalid input are submitted", () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    errorSetting.mockReturnValueOnce("This is the error");
    const wrapper = shallow(
      <SignupForm error="" errorSetting={errorSetting} />
    );
    wrapper.find(Form).at(0).simulate("submit", { preventDefault });
    expect(preventDefault).toBeCalled();
  });

  it("Should get response if valid inputs are submitted", async () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    const signupAction = jest.fn();

    errorSetting.mockReturnValueOnce("This is the error");
    let wrapper;
    act(() => {
      wrapper = mount(
        <Router>
          <SignupForm
            signupAction={signupAction}
            response="This is the response"
            error=""
            errorSetting={errorSetting}
          />
        </Router>
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
    expect(signupAction).toBeCalled();
  });

  it("Should return error if email is invalid", async () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    errorSetting.mockReturnValueOnce("This is the error");
    const wrapper = shallow(
      <SignupForm response="" error="" errorSetting={errorSetting} />
    );
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "envalidEmail" },
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
    expect(errorSetting).toBeCalled();
  });

  it("Should return error if phoneNumber is invalid", async () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    errorSetting.mockReturnValueOnce("This is the error");
    let wrapper;
    act(() => {
      wrapper = mount(
        <Router>
          <SignupForm
            response=""
            error="This is the error"
            errorSetting={errorSetting}
          />
        </Router>
      );
    });
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "email@test.com" },
      { name: "phoneNumber", value: "0789" },
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
    expect(errorSetting).toBeCalled();
  });

  it("Should return error if password is weak", async () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    errorSetting.mockReturnValueOnce("This is the error");
    const wrapper = shallow(
      <SignupForm response="" error="" errorSetting={errorSetting} />
    );
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "email@test.com" },
      { name: "phoneNumber", value: "0789000000" },
      { name: "password", value: "Pas" },
      { name: "confirmPassword", value: "Pas" },
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
    expect(errorSetting).toBeCalled();
  });

  it("Should return error if password don't match", async () => {
    const preventDefault = jest.fn();
    const errorSetting = jest.fn();
    errorSetting.mockReturnValueOnce("This is the error");
    const wrapper = shallow(
      <SignupForm response="" error="" errorSetting={errorSetting} />
    );
    const user = [
      { name: "firstName", value: "firstName" },
      { name: "lastName", value: "lastName" },
      { name: "email", value: "email@test.com" },
      { name: "phoneNumber", value: "0789000000" },
      { name: "password", value: "Password1" },
      { name: "confirmPassword", value: "Password1234" },
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
    expect(errorSetting).toBeCalled();
  });
});
