import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ResetPassword from "../../../components/resetPassword/resetPassword";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn();
const mockSelector = jest.fn();
const mockParams = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));
jest.mock("react-router-dom", () => ({
  useParams: () => mockParams,
}));

describe("reset page", () => {
  let wrapper;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<ResetPassword />);
    });
  });
  it("Should render reset with no errors", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
