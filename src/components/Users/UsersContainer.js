import React from "react"
import {connect} from "react-redux";
import {
    follow, followingProgress,
    setCurrentPage, setToggleIsFetching,
    setUsers, setUsersTotalCount,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import {usersAPI} from "../../DAL/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        usersAPI.pageChanged(pageNumber, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
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
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

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

export default connect(mapStateToProps, {
         follow, unfollow, setUsers, setCurrentPage, followingProgress, setUsersTotalCount, setToggleIsFetching
    })(UsersContainer);