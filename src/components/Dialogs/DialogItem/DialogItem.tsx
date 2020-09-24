import React from "react"
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"
type Props = {
    id : number | null
    name : string | null
}
const DialogItem = (props:Props) => {
    return (
        <div className={`${s.dialogs} ${s.active}`}>
                    <NavLink to={`/dialogs/${props.id} `}>{props.name}</NavLink>
               </div>
    )
}


export default DialogItem;