import { describe } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import SignupImage from "../../components/SignupImage";
import style from "../../components/SignupImage/image.module.scss";

describe("<Alert/>", () => {
  it("Should render alert correctly", () => {
    const wrapper = shallow(<SignupImage />);
    expect(wrapper.find(`.${style.Image}`)).toHaveLength(1);
  });
});
