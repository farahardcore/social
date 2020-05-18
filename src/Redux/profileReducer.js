import {profileAPI} from "../DAL/api";

const SET_STATUS = "SET_STATUS";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts : [
        // {id: 1 , message : "Hi" , likesCount : 12},
        // {id: 2 , message : "Hello" , likesCount : 14},
        // {id: 3 , message : "It's my first post!" , likesCount : 15},
        // {id: 4 , message : "What do you doing?" , likesCount : 13},
        {id: 5 , message : "How much is the fish?" , likesCount : 11}
    ],
    newPostText : "heyhey",
    profile : null,
    status : ""
};

const  profileReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostBody,
                likesCount: 0
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile : action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, status : action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts : state.posts.filter(p => p.id != action.postId)
            }
        }
        default :
            return state;
    }
};
export const  deletePost = (postId) => ({type : DELETE_POST, postId});
export const addPostActionCreator = (newPostBody) => ({type : ADD_POST, newPostBody});
const setUserProfileSuccess = (profile)=> ({type : SET_USER_PROFILE, profile});
const setStatus = (status) => ({type : SET_STATUS,status});
export const getUserStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId).then(
        response=>{
            debugger
            dispatch(setStatus(response.data));
        }
    )
};
export const updateUserStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(
        response=>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }

        }
    )
}
export const setUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(
        profile=>{
            dispatch(setUserProfileSuccess(profile));
        }
    );
}

export default profileReducer;

