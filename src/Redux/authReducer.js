
import {loginAPI, securityAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";


let initialState ={
    isAuth: false,
    id : null,
    login : null,
    email: null,
    captchaURL : null
};
const  authReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SET_CAPTCHA_URL:
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
const setCaptchaUrl = (captchaURL) => ({type : SET_CAPTCHA_URL , payload : {captchaURL}});


export const getAuthUsersData = () => async (dispatch) => {
    let response = await loginAPI.me();
            if(response.data.resultCode === 0){
                let {id , email , login} = response.data.data;
                dispatch(setAuthUsersData(id , email , login, true))
            }
};
export const login = (email, password, rememberMe , captcha) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe , captcha);
            if(response.data.resultCode === 0){
                dispatch(getAuthUsersData())

            }else{
                if(response.data.resultCode === 10){
                    debugger;
                    dispatch(getCaptchaURL());
                }
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

export const getCaptchaURL = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaURL = response.data.url;
    dispatch(setCaptchaUrl(captchaURL));
};