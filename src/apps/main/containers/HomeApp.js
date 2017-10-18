/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Home from "../components/Home";
import { logIn } from "../actions/users";
import type { State as UsersState } from "../reducers/users";
import type { State as CouponsState } from "../reducers/coupons";

export class HomeApp extends Component {
  props: {
    users: UsersState;
    coupons: CouponsState;
    logIn: Function;
    loadCoupons: Function;
  };

  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  componentDidMount () {
    this.props.logIn();
  }

  render () {
    const { users, coupons } = this.props;
    return (
      <div>
        <Helmet title="Home" />
        <Home users={users} coupons={coupons} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    users: state.users,
    coupons: state.coupons
  }),
  (dispatch) => bindActionCreators({
    logIn
  }, dispatch)
)(HomeApp);

