import React from "react";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState ={
    isAuth: false,
    userId : null,
    login : null,
    email: null
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

export const setAuthUsersData = (userId, email, login) => ({type : SET_USERS_DATA,data: { userId ,email ,login}});
export default  authReducer;