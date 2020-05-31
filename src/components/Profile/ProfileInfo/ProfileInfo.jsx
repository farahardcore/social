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
                <div className={s.descriptionBlock}>
                    <div>
                        <div>
                            <img className={s.profilePhoto} alt="" src={props.profile.photos.large || usePhoto}/>
                        </div>
                        <div className={s.changeAvatar}>
                            {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/> }
                            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                        </div>
                    </div>
                    <div className={s.profileInfo}>
                        {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit}
                         profile={props.profile }/> : <ProfileData isOwner={props.isOwner}
                         goToEditMode={ ()=> {setEditMode(true)}} profile={props.profile }/> }
                    </div>
                </div>

            </div>
        )
}
const ProfileData = ({profile, goToEditMode , isOwner}) => {
    return (
        <div>
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
            {isOwner &&  <div>
                <button onClick={goToEditMode}>edit</button>
            </div> }
        </div>
    )
};

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle} :</b> {contactValue}
    </div>
};
export default ProfileInfo;
