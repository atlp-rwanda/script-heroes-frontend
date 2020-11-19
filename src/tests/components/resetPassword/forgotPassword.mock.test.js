import React from "react";
import { mount } from "enzyme";
import { ForgotPassword, Success } from "../../../components/resetPassword/forgotPassword";
import {useSelector, useDispatch} from 'react-redux'
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe("forgot page", () => {
  let wrapper;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<ForgotPassword />, <Success/>);
    });
  });
  it("Should render with no errors", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
