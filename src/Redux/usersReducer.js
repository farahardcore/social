import {usersAPI} from "../DAL/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
    users : [],
    pageSize : 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : true,
    followingInProgress : []
};

const  usersReducer = (state = initialState,action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(user=>{
                    if(user.id === action.userID){
                        return {
                            ...user, followed : true
                    }
                    }
                    return user;
                } )};

        case UNFOLLOW:
            return {...state,
                    users: state.users.map(user=>{
                        if(user.id === action.userID){
                            return {
                                ...user, followed : false
                            }
                        }
                        return user;
                    } )};
        case SET_USERS:
            return {...state, users : action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING:
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress , action.userId]
                    : state.followingInProgress.filter(id=>id !== action.userId)};
        default:
            return state;
    }
};
const followingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING, isFetching, userId});
const followSuccess = (userID) => ({type : FOLLOW,  userID});
const unFollowSuccess = (userID) => ({type : UNFOLLOW, userID});
const setUsersSuccess = (users) => ({type : SET_USERS , users});
const setCurrentPageSuccess = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count : totalUsersCount});
const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const follow = (userId) => async (dispatch) => {
    dispatch(followingProgress(true, userId));
    let response = await usersAPI.setFollow(userId);
            if(response===0) {
                dispatch(followSuccess(userId));
            }
            dispatch(followingProgress(false, userId));
};
export const unFollow = (userId) => async (dispatch) => {
    dispatch(followingProgress(true, userId));
    let response = await usersAPI.setUnfollow(userId);
            if(response===0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(followingProgress(false, userId));
};
export const setUsers =(currentPage, pageSize)=> async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    debugger;
    let data = await usersAPI.getUsers(currentPage , pageSize);
            dispatch(setToggleIsFetching(false));
            dispatch(setCurrentPageSuccess(currentPage));
            dispatch(setUsersSuccess(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
};
export default usersReducer;

