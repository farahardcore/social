import React from "react"
import {Contact} from "./ProfileInfo";
import {createField, Input ,Textarea} from "../../FormControls/FormControls";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../FormControls/FormControls.module.css"



const ProfileDataForm = ({handleSubmit,profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <b> Full Name </b>: {createField("Full name","fullname",[], Input)}
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b> About me :</b>
                {createField("About me","aboutMe",[], Textarea)}

            </div>
            <div>
                <b>LookingForAJob : </b>
                {createField("","lookingForAJob",[], Input, {type : "checkbox"})}
            </div>
            <div>
                <b> My Professional skills :</b>
                {createField("My Professional skills","lookingForAJobDescription",[], Textarea)}
            </div>
            <div>
                <b>Contacts :</b> {Object.keys(profile.contacts).map( key=>{
                return <div key={key} className={s.contact}>
                    <b>{key}</b> {createField(key,"contacts." + key,[], Input)}
                    {console.log(key)}
                </div>
            }) }
            </div>
            <div>
                <button>save changes</button>
            </div>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({form : "edit-profile"})(ProfileDataForm);
export default ProfileDataReduxForm;