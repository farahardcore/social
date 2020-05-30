import React from "react"
import  {LoginReduxForm} from "./FormLogin";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe);

    };
    return(

        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
export default Login;