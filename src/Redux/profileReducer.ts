import {profileAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/types";

const SET_STATUS = "SET_STATUS";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

let initialState = {
    posts : [

        {id: 5 , message : "How much is the fish?" , likesCount : 11}
    ] as Array<PostsType>,
    newPostText : "heyhey",
    profile : null as ProfileType | null,
    status : "",
    newPostTesx : ""
};
type InitialStateType = typeof initialState;
const  profileReducer = (state = initialState,action:any):InitialStateType => {

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
                ...state, profile : {...state.profile, photos : action.photos} as ProfileType
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



type DeletePostType = {
    type : typeof DELETE_POST
    postId : number
};
export const  deletePost = (postId:number):DeletePostType => ({type : DELETE_POST, postId});
type AddPostType = {
    type : typeof ADD_POST
    newPostBody : string
};
export const addPostActionCreator = (newPostBody:string):AddPostType => ({type : ADD_POST, newPostBody});
type SetUserProfileType = {
    type : typeof SET_USER_PROFILE
    profile : ProfileType
};
const setUserProfileSuccess = (profile:ProfileType):SetUserProfileType=> ({type : SET_USER_PROFILE, profile});
type SetStatusType = {
    type : typeof SET_STATUS
    status : string
};
const setStatus = (status:string):SetStatusType => ({type : SET_STATUS,status});
type SavePhotosType = {
    type : typeof SAVE_PHOTO
    photos : PhotosType
}
const savePhotoSuccess = (photos:PhotosType):SavePhotosType => ({type : SAVE_PHOTO,photos});


export const getUserStatus = (userId:number) => async (dispatch:any) =>{
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data));
};
export const updateUserStatus = (status:string) => async (dispatch:any) =>{
    try {
        let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    }catch (error) {
        debugger;
    }
    
};
export const setUserProfile = (userId:number) => async (dispatch:any) => {
    let profile = await profileAPI.getUserProfile(userId);
            dispatch(setUserProfileSuccess(profile));
};
export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile:ProfileType) => async (dispatch: any, getState: any) => {
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

