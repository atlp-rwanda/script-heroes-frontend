import React from "react";
import { mount } from "enzyme";
import HomePage from "../../components/HomePage";
import toJSON from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";

describe("Get next and previous elements", () => {
  it("Should get the next and previous services", () => {
    let wrapper = mount(
      <Router>
        <HomePage />
      </Router>
    );
    wrapper.find({ "data-testid": "prev" }).simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.update();
    wrapper.find({ "data-testid": "next" }).simulate("click");
    wrapper.update();
  });

  it("Should go to the first service when all servicess are done", () => {
    let wrapper = mount(
      <Router>
        <HomePage />
      </Router>
    );

    for (let i = 0; i <= 8; i++) {
      wrapper.find({ "data-testid": "next" }).simulate("click");
      wrapper.update();
    }
    expect(wrapper.find(HomePage).instance().state.property.index).toEqual(4);
  });
});
