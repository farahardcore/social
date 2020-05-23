import React from "react"
import {connect} from "react-redux";
import {
    setUsers, unFollow, follow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage,this.props.pageSize);

    };

    onPageChanged = (pageNumber) => {
        this.props.setUsers(pageNumber, this.props.pageSize);
    };


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCOunt={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
// let authRedirectComponent = withAuthRedirect(UsersContainer);
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setUsers
    })
)(UsersContainer);