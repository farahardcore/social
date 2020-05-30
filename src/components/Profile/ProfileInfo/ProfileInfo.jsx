import React from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from "../../preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usePhoto from "../../../assets/images/haha.jpg";


const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    };
    if(!props.profile){
        return <Preloader/>
    }else {
        return(
            <div>
                <div className={s.avatar}>
                    <img alt="" src="https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg" />
                </div>
                <div className={s.descriptionBlock}>
                    <img alt="" src={props.profile.photos.large || usePhoto}/>
                    {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/> }
                    <span>{props.profile.fullName}</span>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <span>{props.profile.lookingForAJob?"Looking for a work":"Not looking a work"}</span>
                </div>
                <div>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        )
    }

}

export default ProfileInfo;
