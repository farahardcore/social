import React , {useState} from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from "../../preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usePhoto from "../../../assets/images/haha.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    let [editMode , setEditMode] = useState( false);

    if(!props.profile){
        return <Preloader/>
    };
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
         props.saveProfile(formData).then(
             ()=>{
                 setEditMode(false);
             }
         )
    };
        return(
            <div>
                <div className={s.avatar}>
                    <img alt="" src="https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg" />
                </div>
                <div className={s.descriptionBlock}>
                    <img alt="" src={props.profile.photos.large || usePhoto}/>
                    {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/> }
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile }/> : <ProfileData isOwner={props.isOwner} goToEditMode={ ()=> {setEditMode(true)}} profile={props.profile }/> }

                </div>

            </div>
        )
}
const ProfileData = ({profile, goToEditMode , isOwner}) => {
    return (
        <div>
            {isOwner &&  <div>
                <button onClick={goToEditMode}>edit</button>
            </div> }

            <div>
                <b> Full Name :</b> {profile.fullName}
            </div>
            <div>
                <b> About me :</b> {profile.aboutMe}
            </div>
            <div>
                <b>LookingForAJob : </b> {profile.lookingForAJob?"Yes":"No"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b> My Professional skills :</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts :</b> {Object.keys(profile.contacts).map( key=>{
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }) }
            </div>
        </div>
    )
};

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle} :</b> {contactValue}
    </div>
};
export default ProfileInfo;
