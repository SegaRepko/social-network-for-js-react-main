import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import * as axios from "axios";
import {useLocation, useNavigate, useParams} from "react-router-dom";



class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }




  render() {
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
  profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile }) (withRouter(WithUrlDataContainerComponent)); 