import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { Input } from "reactstrap";

import Chat from "../../components/Chats";

describe("Chat page", () => {
  let wrapper;
  beforeEach(() => {
    act(() => {
      wrapper = mount(<Chat />);
    });
  });
  it("should send a chat message", () => {
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "some text message",
        },
      });
  });
});
