import {profileAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_STATUS = "SET_STATUS";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

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
        case SAVE_PHOTO: {
            return {
                ...state, profile : {...state.profile, photos : action.photos}
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts : state.posts.filter(p => p.id !== action.postId)
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
const savePhotoSuccess = (photos) => ({type : SAVE_PHOTO,photos});


export const getUserStatus = (userId) => async (dispatch) =>{
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data));
};
export const updateUserStatus = (status) => async (dispatch) =>{
    let response = await profileAPI.updateStatus(status);
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
};
export const setUserProfile = (userId) => async (dispatch) => {
    let profile = await profileAPI.getUserProfile(userId);
            dispatch(setUserProfileSuccess(profile));
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(setUserProfile(userId));
    }else{
        dispatch(stopSubmit("edit-profile", {_error :response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};
export default profileReducer;

