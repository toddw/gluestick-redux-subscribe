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

  componentDidMount () {
    this.unsubscribe = this.props.route.store.subscribe(this.checkIfLoggedIn);

    // check if we are logged in right from the start
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    const {users} = this.props.route.store.getState();
    if (users.state === "loaded") {
      this.props.loadCoupons();

      // stop listening, we are done
      this.unsubscribe();
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
