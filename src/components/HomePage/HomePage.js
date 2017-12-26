import React, { Component } from "react";
import "./HomePage.css";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    console.log(
      "access_token",
      this.props.location.hash.split("#access_token=")[1]
    );
    return <div className="HomePage">Hello, I am HomePage!</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(HomePage);
