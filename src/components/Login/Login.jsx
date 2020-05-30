import React from "react"
import  {LoginReduxForm} from "./FormLogin";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe);

    };
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return(

        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
});
export default  connect(mapStateToProps, {login} )(Login);