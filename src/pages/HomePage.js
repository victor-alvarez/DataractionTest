import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
