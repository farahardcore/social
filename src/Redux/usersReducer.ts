import {usersAPI} from "../DAL/api";
import {UserType} from "../types/types";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
    users : [] as Array<UserType>,
    pageSize : 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : true,
    followingInProgress : [] as Array<number>//Array of users Ids
};
type InitialStateType = typeof initialState;
const  usersReducer = (state = initialState,action:any):InitialStateType => {

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
type FollowingProgressType = {
    type : typeof TOGGLE_IS_FOLLOWING
    isFetching : boolean
    userId : number
};
const followingProgress = (isFetching : boolean, userId : number):FollowingProgressType => ({type:TOGGLE_IS_FOLLOWING, isFetching, userId});

type FollowSuccessType = {
    type : typeof FOLLOW
    userId : number
};
const followSuccess = (userId : number) : FollowSuccessType => ({type : FOLLOW,  userId});

type UnfollowSuccessType = {
    type : typeof UNFOLLOW
    userId : number
};
const unFollowSuccess = (userId : number):UnfollowSuccessType => ({type : UNFOLLOW, userId});

type SetUsersType = {
    type : typeof SET_USERS
    users : Array<UserType>
};
const setUsersSuccess = (users:Array<UserType>):SetUsersType => ({type : SET_USERS , users});

type SetCurrentPageType = {
    type : typeof SET_CURRENT_PAGE
    currentPage : number
};
const setCurrentPageSuccess = (currentPage: number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});

type SetUsersTotalCountType = {
    type : typeof  SET_USERS_TOTAL_COUNT
    count : number
};
const setUsersTotalCount = (totalUsersCount: number) : SetUsersTotalCountType => ({type: SET_USERS_TOTAL_COUNT, count : totalUsersCount});

type SetToggleIsFetchingType = {
    type : typeof TOGGLE_IS_FETCHING
    isFetching : boolean
};
const setToggleIsFetching = (isFetching : boolean):SetToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});


export const follow = (userId:number) => async (dispatch:any) => {
    dispatch(followingProgress(true, userId));
    let response = await usersAPI.setFollow(userId);
            if(response===0) {
                dispatch(followSuccess(userId));
            }
            dispatch(followingProgress(false, userId));
};
export const unFollow = (userId:number) => async (dispatch:any) => {
    dispatch(followingProgress(true, userId));
    let response = await usersAPI.setUnfollow(userId);
            if(response===0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(followingProgress(false, userId));
};
export const setUsers =(currentPage:number, pageSize:number)=> async (dispatch:any) => {
    dispatch(setToggleIsFetching(true));
    debugger;
    let data = await usersAPI.getUsers(currentPage , pageSize);
            dispatch(setToggleIsFetching(false));
            dispatch(setCurrentPageSuccess(currentPage));
            dispatch(setUsersSuccess(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
};
export default usersReducer;

