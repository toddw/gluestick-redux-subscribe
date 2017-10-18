/* @flow */

import reducer from "apps/main/reducers/coupons";

describe("apps/main/reducers/coupons", () => {
  it("returns the initial state", () => {
    const state = {};
    expect(
      reducer({}, {
        type: "_TEST_ACTION"
      })
    ).toEqual(state);
  });
});
