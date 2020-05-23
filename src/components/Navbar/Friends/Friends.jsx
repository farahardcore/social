import React from "react"
import s from "./Friends.module.css"
const Friends = (props) => {
    return <div className={s.friends}>
        <img alt="" src={props.src} />
        </div>


}

export default Friends