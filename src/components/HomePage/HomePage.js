import React, { Component } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { saveUserAccessTokenAndGetProfileData } from "../../modules/user";
import Profile from "./Components/Profile/Profile";
import PropTypes from "prop-types";

class HomePage extends Component {
  componentWillMount() {
    var accessToken = this.props.location.hash.split("#access_token=")[1];
    this.props.dispatch(saveUserAccessTokenAndGetProfileData(accessToken));
  }
  get countData() {
    return this.props.user.currentUserData.counts
      ? [
          this.props.user.currentUserData.counts.follows,
          this.props.user.currentUserData.counts.followed_by
        ]
      : 0;
  }
  get recentMedia() {
    if (this.props.user.userMediaData.length) {
      return this.props.user.userMediaData.map(function(element, i) {
        return (
          <img
            key={i}
            src={
              element.images.standard_resolution
                ? element.images.standard_resolution.url
                : 0
            }
            alt=""
          />
        );
      });
    } else return 0;
  }
  render() {
    const {
      full_name,
      profile_picture,
      counts,
      username
    } = this.props.user.currentUserData;
    return (
      <div className="home-page">
        <Profile
          fullName={full_name}
          profilePicture={profile_picture}
          counts={counts}
          username={username}
        />
        {this.recentMedia}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

HomePage.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(HomePage);
