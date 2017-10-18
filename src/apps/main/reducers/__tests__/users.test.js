/* @flow */

import reducer from "apps/main/reducers/users";

describe("apps/main/reducers/users", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
