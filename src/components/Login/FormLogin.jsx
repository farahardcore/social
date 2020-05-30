import React from "react"
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../../utillits/validators/validators";
import styles from "../FormControls/FormControls.module.css"

const FormLogin = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`email`} placeholder={"Email"} type={"text"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={`password`} placeholder={"Password"} type={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={`rememberMe`} type={"checkbox"} component={Input}/>Remember me
                {props.error&&<div className={styles.formSummaryError}>
                    {props.error}
                </div>}

                <button>Login</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form : "Login"})(FormLogin);