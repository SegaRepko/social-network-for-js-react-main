import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";




class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    // редирект
    // if (!userId) {
    //   userId = this.props.authorizedUserId;
    //   if (!userId) {
    //     this.props.history.push("/login");
    //   }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);

  }
  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} />
    )
  }
}

function withRouter(Component) {

  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()

    return <Component
      {...props}
      router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
)(ProfileContainer);




