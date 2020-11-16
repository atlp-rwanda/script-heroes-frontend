import { describe } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";

import Login from "../../components/Login";

describe("Login", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<Login />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
