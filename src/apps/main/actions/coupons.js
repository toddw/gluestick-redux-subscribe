export function loadCoupons () {
  return (dispatch, getState) => {
    const { users } = getState();
    if (users.name === "Todd") {
      dispatch({
        type: "LOAD_COUPONS",
        payload: [
          "Save 80% off all cars",
          "Save 10% off of tires"
        ]
      });
    }
  };
}

