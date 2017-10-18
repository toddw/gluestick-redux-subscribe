/* @flow */

export type State = {
  state: string,
  name?: string,
}

const INITIAL_STATE: State = {
  state: "loading",
};

export default (state: State = INITIAL_STATE, action: { type: string, payload?: State}) => {
  switch (action.type) {
    case "LOG_IN_INIT": {
      return {
        state: "loading"
      };
    }
    case "LOG_IN": {
      return {
        state: "loaded",
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

