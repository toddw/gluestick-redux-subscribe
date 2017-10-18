/* @flow */

import React, { Component } from "react";
import type { State as UsersState } from "../reducers/users";
import type { State as CouponsState } from "../reducers/coupons";

export default class Home extends Component {
  props: {
    users: UsersState;
    coupons: CouponsState;
  };

  render () {
    const { users, coupons } = this.props;
    return (
      <div>
        <h1>Test App</h1>
        {users.state === "loading" ? "Loading User…" : null}
        {coupons.map((c, i) => <div key={i}>{c}</div>)}
      </div>
    );
  }
}

