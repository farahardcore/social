import React from 'react'
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return(
        <div className={s.mainProfile} >
            <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;