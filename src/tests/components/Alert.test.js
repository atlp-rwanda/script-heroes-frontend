import { describe } from "@jest/globals";
import React from "react";
import { shallow, mount } from "enzyme";
import { Alert } from "reactstrap";
import AlertComponent from "../../components/commons/Alert";

describe("<Alert/>", () => {
  it("Should render alert correctly", () => {
    const wrapper = mount(
      <AlertComponent message="This is the message" isOpen={true} />
    );
    expect(wrapper.find(Alert)).toHaveLength(1);
    expect(wrapper.props().message).toEqual("This is the message");
    expect(wrapper.props().isOpen).toEqual(true);
  });
});
