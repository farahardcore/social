import React from "react"
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageAC,
    setUsersActionCreator, setUsersTotalCountAC,
    unfollowActionCreator
} from "../../Redux/usersReducer";


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

export default connect(mapStateToProps,mapDispatchToProps)(Users)