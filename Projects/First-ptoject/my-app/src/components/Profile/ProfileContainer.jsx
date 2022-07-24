import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams, Navigate} from "react-router-dom";




class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);

  }




  render() {

    if (!this.props.isAuth) return <Navigate to={"/login"} />;

    return (
      <Profile {...this.props} profile={this.props.profile} />
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
        router={{location, navigate, params}} />
  }

  return ComponentWithRouterProp
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile }) (withRouter(WithUrlDataContainerComponent)); 