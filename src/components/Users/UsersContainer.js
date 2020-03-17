import React from "react"
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageAC,
    setUsersActionCreator, setUsersTotalCountAC,
    unfollowActionCreator
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        alert("componentDidMount");
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);

            });
    };
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                debugger;
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    };


    render() {

        return <Users totalUsersCOunt={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}
let mapStateToProps= (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    follow : (userID) => {
        dispatch(followActionCreator(userID))
    },
    unfollow : (userID) => {
        dispatch(unfollowActionCreator(userID))
    },
    setUsers : (users) => {
         dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
        setUsersTotalCount:(totalCount) => {
        debugger;
        dispatch(setUsersTotalCountAC(totalCount))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);