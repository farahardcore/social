import {profileAPI} from "../DAL/api";

const SET_STATUS = "SET_STATUS";
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile : action.profile
            }
        };
        case SET_STATUS: {
            return {
                ...state, status : action.status
            }
        }
        default :
            return state;
    }
};
export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT , newText : text});
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

