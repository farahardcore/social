
import {loginAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState ={
    isAuth: false,
    id : null,
    login : null,
    email: null,
};
const  authReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            };
        default :
            return state;
    }
};
export default  authReducer;
const setAuthUsersData = (id, email, login, isAuth) => ({type : SET_USERS_DATA,payload: { id ,email ,login, isAuth}});
export const getAuthUsersData = () => async (dispatch) => {
    let response = await loginAPI.me();
            if(response.data.resultCode === 0){
                let {id , email , login} = response.data.data;
                dispatch(setAuthUsersData(id , email , login, true))
            }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe);
            if(response.data.resultCode === 0){
                dispatch(getAuthUsersData())

            }else{
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "check the correctness of the entered data"
                dispatch(stopSubmit("Login", {_error : errorMessage }));
            }
};
export const logout = () => async (dispatch) => {
    let response = await loginAPI.logout();
            if(response.data.resultCode === 0){
                dispatch(setAuthUsersData(null,null,null,false))
            }

};