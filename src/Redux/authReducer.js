import React from "react";
import {loginAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState ={
    isAuth: false,
    userId : null,
    login : null,
    email: null,
};
const  authReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        default :
            return state;
    }
};
export default  authReducer;
const setAuthUsersData = (Id, email, login, isAuth) => ({type : SET_USERS_DATA,payload: { Id ,email ,login, isAuth}});
export const getAuthUsersData = () => (dispatch) => {
    loginAPI.me().then(
        response => {
            debugger;
            if(response.data.resultCode === 0){
                debugger;
                let {Id , email , login} = response.data.data;
                dispatch(setAuthUsersData(Id , email , login, true))
            }
        }
    )

};
export const login = (email, password, rememberMe) => (dispatch) => {
    loginAPI.login(email, password, rememberMe).then(
        response => {
            debugger;
            if(response.data.resultCode === 0){
                dispatch(getAuthUsersData())

            }else{
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "check the correctness of the entered data"
                dispatch(stopSubmit("Login", {_error : errorMessage }));
            }
        }
    )
};
export const logout = () => (dispatch) => {
    loginAPI.logout().then(
        response => {
            debugger;
            if(response.data.resultCode === 0){
                dispatch(setAuthUsersData(null,null,null,false))
            }
        }
    )

};