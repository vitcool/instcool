import React, { Component } from "react";
import "./StartPage.css";
import { connect } from "react-redux";
import { loginUser } from "../../modules/user";
import API from "../../const/api";

class StartPage extends Component {
  onLoginClick() {
    //this.props.dispatch(loginUser());
  }
  render() {
    let url = API.API_URL;
    let method = API.AUTHARIZATION_METHOD;
    let params = "?client_id=" +
    API.CLIENT_ID +
    "&redirect_uri=http://localhost:3000/home&response_type=token";
    return (
      <div className="start-page">
        <a
          className="login-start-page"
          href={url + method + params}
        >
          <div className="login-button" onClick={this.onLoginClick.bind(this)}>
            <span>Login</span>
          </div>
        </a>
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
