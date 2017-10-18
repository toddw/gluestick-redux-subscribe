/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { AfterLogin } from "apps/main/containers/AfterLogin";

describe("apps/main/containers/AfterLogin", () => {
  it("renders without an issue", () => {
    const subject = <AfterLogin />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
