// import * as types from "../types";

export const authenticate = (email, password) => (dispatch) => {
  return {
    type: "SIGN_IN",
    payload: {
      email,
      password
    }
  };
};

export const function2 = () => (dispatch) => {
  return {
    type: "Sample2"
  };
};

export const counterAction = () => (dispatch) => {
  return dispatch({
    type: "test",
    payload: ""
  });
};
