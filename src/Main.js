import React, { Component } from "react";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPageHook";
import HomePage from "./pages/HomePageHook";
import store from "../src/store";
// import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";

class Main extends Component {
  render() {
    // TODO: Add Router
    return <AuthPage store={store} />;
  }
}

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
