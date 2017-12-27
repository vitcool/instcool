import React, { Component } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { saveUserAccessTokenAndGetProfileData } from "../../modules/user";

class HomePage extends Component {
  componentWillMount() {
    var accessToken =
      this.props.location.hash.split("#access_token=")[1];
    this.props.dispatch(saveUserAccessTokenAndGetProfileData(accessToken));
  }
  get countData() {
    return this.props.user.currentUserData.counts ?
      <div>
        <div>follows to {this.props.user.currentUserData.counts.follows} users</div>
        <div>followed by {this.props.user.currentUserData.counts.followed_by} users</div>
      </div> : 0;
  }
  get recentMedia(){
    if (this.props.user.userMediaData.length){
      return this.props.user.userMediaData.map(function(element, i){
        debugger
        return <img key={i} src={element.images.standard_resolution ? element.images.standard_resolution.url : 0} alt=""/>
      })
    }    
    else return 0;
  }
  render() {
    return (<div className="HomePage">
      <div>{this.props.user.currentUserData ? this.props.user.currentUserData.full_name : 0}</div>
      <img src={this.props.user.currentUserData ? this.props.user.currentUserData.profile_picture : 0} alt=""/>
      {this.countData}
      {this.recentMedia}
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(HomePage);
