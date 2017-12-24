import React, { Component } from "react";
import "./StartPage.css";
import { connect } from "react-redux";
import { loginUser } from "../../modules/user";

class StartPage extends Component {
  onLoginClick() {
    this.props.dispatch(loginUser());
  }
  render() {
    return (
      <div className="start-page">
        <div className="login-button" onClick={this.onLoginClick.bind(this)}>
          <span>Login</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(StartPage);
