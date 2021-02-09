import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

const HomePage = (props) => {
  useEffect(() => {}, []);
  return <div></div>;
};

const mapStateToProps = (state) => ({
  // value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  // fn: ()=> dispatch(fn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
