import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    const { fullName, profilePicture, counts, username } = this.props;
    return (
      <div className="profile-info">
        <div className="profile-photo">
          <img
            src={profilePicture ? profilePicture : 0}
            alt={fullName}
            className="profile-img"
          />
        </div>
        <div className="profile-data">
          <div className="profile-data-info">
            <div className="left-side">
              <div className="full-name">
                <div className="title">Full name</div>
                <div className="full-name-data">{fullName ? fullName : 0}</div>
              </div>
              <div className="username">
                <div className="title">Username</div>
                <div className="username-data">{username ? username : 0}</div>
              </div>
            </div>
            {counts ? (
              <div className="follow-info">
                <div className="follows">
                  <div className="title">Follows</div>
                  <div className="follows-data">{counts.follows} people</div>
                </div>
                <div className="followed-by">
                  <div className="title">Followed by</div>
                  <div className="followed-by-data">
                    {counts.followed_by} people
                  </div>
                </div>
                <div className="media">
                  <div className="title">Media</div>
                  <div className="followed-by-data">{counts.media} files</div>
                </div>
              </div>
            ) : (
              0
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
