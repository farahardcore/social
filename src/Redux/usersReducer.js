

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";

let initialState = {
    users : [],
    pageSize : 5,
    totalUsersCount : 0,
    currentPage : 1
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
            debugger;
            return {...state, totalUsersCount: action.count};
        default:
            return state;
    }
};
export const followActionCreator = (userID) => ({type : FOLLOW,  userID});
export const unfollowActionCreator = (userID) => ({type : UNFOLLOW, userID});
export const setUsersActionCreator = (users) => ({type : SET_USERS , users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count : totalUsersCount});


export default usersReducer;

