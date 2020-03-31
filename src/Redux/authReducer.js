import React from "react";
import {headerAPI} from "../DAL/api";

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
                ...action.data,
                isAuth: true
            };
        default :
            return state;
    }
};

const setAuthUsersDataSuccess = (userId, email, login) => ({type : SET_USERS_DATA,data: { userId ,email ,login}});
export default  authReducer;
export const setAuthUsersData = () => (dispatch) => {
    headerAPI.getAuth().then(
        data => {
            debugger;
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUsersDataSuccess( id, email, login ));
            }else{
                alert(`${data.messages}<3`);
            }
        }
    )
};