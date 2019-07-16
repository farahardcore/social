import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import { dirname } from 'path';


const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src="https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;