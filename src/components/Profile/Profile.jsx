import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import { dirname } from 'path';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return(
        <div cla>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;