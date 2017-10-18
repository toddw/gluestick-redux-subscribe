/* @flow */

export type State = Array<String>;

const INITIAL_STATE: State = [];

export default (state: State = INITIAL_STATE, action: { type: string, payload?: State}) => {
  switch (action.type) {
    case "LOAD_COUPONS": {
      return action.payload;
    }
    default:
      return state;
  }
};
