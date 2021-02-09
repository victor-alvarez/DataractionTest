// import * as types from "../types";
const initialState = {
  count: 0,
  email: null,
  password: null
  // values
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...action.payload };
    case "Sample2":
      return { ...action.payload };
    case "test":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default authReducer;
