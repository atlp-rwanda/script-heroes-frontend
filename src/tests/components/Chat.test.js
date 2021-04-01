import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import Chat from "../../components/Chats";

describe("Chat page", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<Chat />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
