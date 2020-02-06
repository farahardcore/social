import React from "react"
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../Redux/usersReducer";


let mapStateToProps= (state) =>{
    return {
        users: state.usersPage.users
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
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)