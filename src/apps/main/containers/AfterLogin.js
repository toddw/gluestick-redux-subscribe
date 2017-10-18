/* @flow */

import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadCoupons } from "../actions/coupons";

export class AfterLogin extends Component {
  props: {
    children: any;
    route: {
      store: {
        subscribe: Function;
        getState: Function;
      }
    };
    loadCoupons: Function;
  };

  unsubscribe: Function;
  hasRun: boolean;

  componentDidMount () {
    this.hasRun = false;
    this.unsubscribe = this.props.route.store.subscribe(this.stateChanged);
  }

  stateChanged = () => {
    const {users} = this.props.route.store.getState();
    if (users.state === "loaded" && !this.hasRun) {
      this.hasRun = true;
      this.props.loadCoupons();
    }
  };

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return this.props.children;
  }
}

export default connect(
  (/* state */) => ({/** _INSERT_STATE_  **/}),
  (dispatch) => bindActionCreators({loadCoupons}, dispatch)
)(AfterLogin);
