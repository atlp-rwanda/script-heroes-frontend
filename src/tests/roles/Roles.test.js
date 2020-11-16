import { mount, shallow } from "enzyme";
import React from "react";
import Roles from "../../views/Roles/Roles";
import mockProvider from "../mockProvider";

describe("Roles", () => {
  let useEffect;
  let wrapper;
  const roles = [
    {
      name: "role",
      description: "just a test role",
    },
  ];

  beforeEach(() => {
    const state = {
      roles: {
        roles: [
          {
            id: 1,
            name: "admin",
            description: "some random description",
          },
        ],
      },
      users: {
        users: [
          {
            firstName: "Dummy",
            lastName: "user",
            roleId: 1,
            id: 1,
            email: "dummy@user.mail",
          },
        ],
      },
      alerts: {
        message: "some alert",
        color: "success",
      },
    };

    useEffect = jest.spyOn(React, "useEffect");
    wrapper = mockProvider(<Roles />, mount, state);
  });

  test("should create a role", () => {
    wrapper.find('input[name="name"]').simulate("change", {
      target: {
        value: "some name",
      },
    });
    expect(wrapper.find('input[name="name"]').prop("value")).toEqual(
      "some name"
    );

    wrapper.find('input[name="description"]').simulate("change", {
      target: {
        value: "some description",
      },
    });
    expect(wrapper.find('input[name="description"]').prop("value")).toEqual(
      "some description"
    );
    wrapper.find("form.create-role").simulate("submit");
  });

  test("should set the value of email on assigning", () => {
    wrapper
      .find("select.email")
      .simulate("change", { target: { value: "hello@mail" } });

    wrapper
      .find("select.role-name")
      .simulate("change", { target: { value: "hello" } });
    wrapper.find("form.assign-role").simulate("submit");
  });

  test("should open edit modal", () => {
    wrapper.find("span.edit").simulate("click");
  });

  test("should close notification", () => {
    wrapper.find("button.close span").simulate("click");
  });

  test("", () => {
    wrapper.find("span.edit").simulate("click");
    wrapper.find(".modal-form input[name='modal-name']").simulate("change", {
      target: {
        value: "s",
      },
    });

    wrapper.find(".modal-footer button.update").simulate("click");

    wrapper.find(".modal-form input[name='modal-name']").simulate("change", {
      target: {
        value: "some random name",
      },
    });
    wrapper
      .find(".modal-form input[name='modal-description']")
      .simulate("change", {
        target: {
          value: "some random description",
        },
      });
    wrapper.find(".modal-footer button.update").simulate("click");
    wrapper.find(".modal-footer button.cancel").simulate("click");
  });

  test("should open delete modal", () => {
    wrapper.find("span.delete").simulate("click");
    wrapper.find(".modal-footer button.delete").simulate("click");
    wrapper.find(".modal-footer button.cancel").simulate("click");
  });
});
