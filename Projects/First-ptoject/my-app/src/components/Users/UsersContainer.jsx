import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsers, toggleFollowingProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getpageSize, getTotalUsersCount, getUser } from "../../redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }


    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);


    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getpageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow,
            setCurrentPage,
            toggleFollowingProgress, getUsers
        })
)(UsersContainer);