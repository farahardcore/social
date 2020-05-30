import React from "react"
import  {LoginReduxForm} from "./FormLogin";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha);

    };
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return(

        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    captchaURL: state.auth.captchaURL
});
export default  connect(mapStateToProps, {login} )(Login);