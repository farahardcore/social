import React from "react"
import {connect} from "react-redux";
import {
    setUsers, unFollow, follow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


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
let authRedirectComponent = withAuthRedirect(UsersContainer);
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setUsers
    })
)(UsersContainer);