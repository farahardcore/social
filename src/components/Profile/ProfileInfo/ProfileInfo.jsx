import React from 'react'
import s from "./ProfileInfo.module.css"
import { dirname } from 'path';


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src="https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;