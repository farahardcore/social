import { stopSubmit } from "redux-form";
import {loginAPI, securityAPI} from "../DAL/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";


let initialState  ={
    isAuth: false,
    id : null as number | null,
    login : null as string | null,
    email: null as string | null,
    captchaURL : null as string | null
};
export type InitialStateType = typeof initialState
const  authReducer = (state  = initialState ,action : any) : InitialStateType => {
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
type PayloadType = {
    id : number | null
    email : string | null
    login : string | null
    isAuth : boolean | null

}
type SetAuthUsersDataType = {
    type : typeof SET_USERS_DATA
    payload : PayloadType
}
const setAuthUsersData = (id:number | null, email:string | null, login:string | null, isAuth:boolean) :SetAuthUsersDataType => ({type : SET_USERS_DATA,payload:{ id ,email ,login, isAuth}});

type SetCaptchaUrlType = {
    type : typeof SET_CAPTCHA_URL
    payload : {captchaURL : string}
}
const setCaptchaUrl = (captchaURL:string): SetCaptchaUrlType => ({type : SET_CAPTCHA_URL , payload : {captchaURL}});


export const getAuthUsersData = () => async (dispatch : any) => {
    let response = await loginAPI.me();
            if(response.data.resultCode === 0){
                let {id , email , login} = response.data.data;
                dispatch(setAuthUsersData(id , email , login, true))
            }
};
export const login = (email:string, password:string, rememberMe:boolean , captcha:string) => async (dispatch:any) => {
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
export const logout = () => async (dispatch:any) => {
    let response = await loginAPI.logout();
            if(response.data.resultCode === 0){
                dispatch(setAuthUsersData(null,null,null,false))
            }
};

export const getCaptchaURL = () => async (dispatch:any) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaURL = response.data.url;
    dispatch(setCaptchaUrl(captchaURL));
};