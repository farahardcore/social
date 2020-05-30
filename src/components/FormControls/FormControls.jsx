import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

const FormConrol = ({input, meta , child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles.formController : ""}>
            <div>
                {props.children}

            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta , child, ...restProps} = props;
    return <FormConrol {...props}> <textarea {...input} {...restProps}/> </FormConrol>
};
export const Input = (props) => {
    const {input, meta , child, ...restProps} = props;
    return <FormConrol {...props}> <input {...input} {...restProps}/> </FormConrol>
};
export const createField = (placeholder, name, validators, component, props = {}, text="") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators} component={component}
                   {...props}/>{text}
        </div>
    )
}
